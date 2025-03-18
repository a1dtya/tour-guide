"use client";

import React, { useState } from "react";
import galleryImages from "../public/assets/data/gallery.json";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const [allImages, setAllImages] = useState(false);

  const visibleImages = allImages ? galleryImages : galleryImages.slice(0, 8);

  // const itemVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  const toggleShowALl = () => {
    setAllImages(!allImages);
    console.log("Showing all the images: ", !allImages);
  };

  return (
    <div
      className="gallery-wrapper "
      // initial="hidden"
      // animate="visible"
      // variants={{
      //   visible: {
      //     transition: {
      //       staggerChildren: 0.3,
      //     },
      //   },
      // }}
    >
      <div className="gallery-title">
        <div className="gallery-title-heading">
          <h1 className="tourguide-title-text">From the Gallery</h1>
          <p className="tourguide-info-text w-2/3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit
          </p>
        </div>
        <div className="gallery-title-btn">
          <div className="btn-type-3" onClick={toggleShowALl}>
            {allImages ? "View less" : "View all images"}
          </div>
        </div>
      </div>

      <div className="gallery-cards-wrapper  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {visibleImages.map((item, index) => (
          <div
            key={item.id}
            className="gallery-card"
            style={{ backgroundImage: `url(${item.url})` }}
            // initial="hidden"
            // whileInView="visible"
            // variants={itemVariants}
            // transition={{ duration: 1, delay: index * 0.1 }}
            // viewport={{ once: true }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
