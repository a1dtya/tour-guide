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
      <div className="gallery-title">
        <div className="gallery-title-heading">
          <h1 className="tourguide-title-text">Latest stories</h1>
          <p className="tourguide-info-text mt-[10px]">
            See our blogs and the stories it holds, it imports to get an idea
            about the tours
          </p>
          <p className="tourguide-info-text">
    
            and everything related about it.
          </p>
        </div>
        <div className="gallery-title-btn">
          <div className="btn-secondary" onClick={toggleShowALl}>
            View All posts
          </div>
        </div>
      </div>

      <div className="latest-blogs mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] ">
        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
              src={"/assets/images/alaska.jpg"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", objectFit: "cover" }}
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
              <h3>7 signs and symptoms of Iodine Deficiency</h3>
            </div>
          </div>
        </div>

        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
              src={"/assets/images/alaska.jpg"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", objectFit: "cover" }}
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
              <h3>7 signs and symptoms of Iodine Deficiency</h3>
            </div>
          </div>
        </div>

        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
              src={"/assets/images/alaska.jpg"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", objectFit: "cover" }}
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
              <h3>7 signs and symptoms of Iodine Deficiency</h3>
            </div>
          </div>
        </div>



        <div className="blogs-card">
          <div className="blog-card-image">
            <Image
              src={"/assets/images/alaska.jpg"}
              alt="Blog Image"
              width={100}
              height={200}
              style={{ width: "100%", objectFit: "cover" }}
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
              <h3>7 signs and symptoms of Iodine Deficiency</h3>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Blogs;
