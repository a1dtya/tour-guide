
"use client";

import React, { useState } from "react";
import galleryImages from "../public/assets/data/gallery.json";
import { motion } from "framer-motion";

const Gallery = () => {
  const [allImages, setAllImages] = useState(false);

  const visibleImages = allImages ? galleryImages : galleryImages.slice(0, 8);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const toggleShowALl = () => {
    setAllImages(!allImages);
    console.log("Showing all the images: ", !allImages);
  };

  return (
    <motion.div
      className="gallery-wrapper p-[50px] my-[0px]"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, 
          },
        },
      }}
    >
      <div className="gallery-title">
        <div className="gallery-title-heading">
          <h1 className="tourguide-title-text">From the Gallery</h1>
          <p className="tourguide-info-text">
            See our latest gallery imports to get an idea about the tour
          </p>
        </div>
        <div className="gallery-title-btn">
          <div className="btn-secondary" onClick={toggleShowALl}>
            {allImages ? "View less" : "View all images"}
          </div>
        </div>
      </div>

      <div className="gallery-cards-wrapper px-[10px] md:px-[50px] lg:px-[50px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
        {visibleImages.map((item, index) => (
          <motion.div
            key={item.id} 
            className="gallery-card"
            style={{ backgroundImage: `url(${item.url})` }} 
            initial="hidden"
            whileInView="visible" 
            variants={itemVariants} 
            transition={{ duration: 1, delay: index * 0.1 }} 
            viewport={{ once: true }} 
          ></motion.div>
        ))}
      </div>


    </motion.div>
  );
};

export default Gallery;
