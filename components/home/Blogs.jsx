"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Blogs = () => {
  const toggleShowALl = () => {
    console.log("do something");
  };

  return (
    <div className="home-latest-blogs-wrapper">
      <div className="gallery-title blogs-heading ">
        <div className="gallery-title-heading">
          <h1 className="tourguide-title-text">Latest stories</h1>
          <p className="tourguide-info-text mt-[10px] w-2/3">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
          </p>
         
        </div>
        <div className="gallery-title-btn">
          <div className="btn-type-3" onClick={toggleShowALl}>
            View All posts
          </div>
        </div>
      </div>

      <div className="latest-blogs mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] ">
        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
               src={"/assets/media/blogs/blog1.png"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", minHeight:"200px", objectFit: "cover" }}
            />
          </div>
          <div className="blog-card-author-info">
            <div className="blog-card-author-info-author">
              <div className="blog-card-author-info-author-image">
                <Image
                  src={"/assets/images/blogs/team1.jpg"}
                  alt="author"
                  width={24}
                  height={24}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="blog-card-author-info-author-name">
                <p>Jackie Makanda</p>
              </div>
            </div>
            <div className="blog-card-description">
              <p>7 signs and symptoms of Iodine Deficiency</p>
            </div>
          </div>
        </div>

        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
             src={"/assets/media/blogs/blog2.png"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", minHeight:"200px", objectFit: "cover" }}
            />
          </div>
          <div className="blog-card-author-info">
            <div className="blog-card-author-info-author">
              <div className="blog-card-author-info-author-image">
                <Image
                  src={"/assets/images/blogs/team1.jpg"}
                  alt="author"
                  width={20}
                  height={20}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="blog-card-author-info-author-name">
                <p>Jackie Makanda</p>
              </div>
            </div>
            <div className="blog-card-description">
              <p>How to Fix Your Sleep Schedule: 7 Easy Ways</p>
            </div>
          </div>
        </div>

        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
              src={"/assets/media/blogs/blog3.png"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", minHeight:"200px", objectFit: "cover" }}
            />
          </div>
          <div className="blog-card-author-info">
            <div className="blog-card-author-info-author">
              <div className="blog-card-author-info-author-image">
                <Image
                  src={"/assets/images/blogs/team1.jpg"}
                  alt="author"
                  width={20}
                  height={20}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="blog-card-author-info-author-name">
                <p>Jackie Makanda</p>
              </div>
            </div>
            <div className="blog-card-description">
              <p>10 Proven Health Benefits of Cinnamon</p>
            </div>
          </div>
        </div>



        <div className="blogs-card">
          <div className="blog-card-image">
            <Image  
              src={"/assets/media/blogs/blog4.png"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", minHeight:"200px",  objectFit: "cover" }}
            />
          </div>
          <div className="blog-card-author-info">
            <div className="blog-card-author-info-author">
              <div className="blog-card-author-info-author-image">
                <Image
                  src={"/assets/images/blogs/team1.jpg"}
                  alt="author"
                  width={20}
                  height={20}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="blog-card-author-info-author-name">
                <p>Jackie Makanda</p>
              </div>
            </div>
            <div className="blog-card-description">
              <p>11 Health Benefits of Turmeric and Curcumin</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Blogs;
