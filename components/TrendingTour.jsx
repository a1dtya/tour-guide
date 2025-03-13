"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import TestImage from "../public/assets/images/gallery/lake.jpg";
import { FcLike } from "react-icons/fc";
import { IoIosShareAlt } from "react-icons/io";
import TestImage2 from "../public/assets/images/curve.svg";

const TrendingTour = () => {
  return (
    <div className="trending-tour-wrapper">
      <div className="trending-tour-gradient-overlay"></div>

      <div className="container">
        <Swiper
          className="trending-tour-swiper-wrapper"
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={false}
          loop={true}
        >
          <SwiperSlide className="trending-tour-swiper-slide-wrapper">
            <div className="trending-tour-swiper-slide">
              <div className=" trending-tour-swiper-slide-image">
                <Image
                  className="trending-tour-mask-image"
                  src={TestImage}
                  alt="Banner Image"
                  width={200}
                  height={200}
                />
              </div>
              <div className="trending-tour-swiper-slide-information">
                <div className="trending-tour-swiper-slide-information-title">
                  <h1> WilderLife of Alaska</h1>
                  <p className="mt-[20px]">
                    <span>Alaska, USA</span> {" "}
                      4.9 stars
                    ( 300 reviews) 
                    
                  </p>
                  <p className="mb-[20px]">This is the first slide it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="trending-tour-swiper-slide-information-links">
                  <div className="trending-tour-swiper-slide-information-links-btn">
                    <Link href="/">
                      <div className="search-btn">Book now</div>
                    </Link>
                  </div>

                  <div className="trending-tour-swiper-slide-information-links-elements">
                    <FcLike />
                  </div>

                  <div>
                    <IoIosShareAlt />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>



          <SwiperSlide className="trending-tour-swiper-slide-wrapper">
            <div className="trending-tour-swiper-slide">
              <div className=" trending-tour-swiper-slide-image">
                <Image
                  className="trending-tour-mask-image"
                  src={TestImage}
                  alt="Banner Image"
                  width={200}
                  height={200}
                />
              </div>
              <div className="trending-tour-swiper-slide-information">
                <div className="trending-tour-swiper-slide-information-title">
                  <h1> New Zealnd tour for the weekend</h1>
                  <p className="mt-[20px]">
                    <span>Alaska, USA</span> {" "}
                      4.9 stars
                    ( 300 reviews) 
                    
                  </p>
                  <p className="mb-[20px]">This is the first slide it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="trending-tour-swiper-slide-information-links">
                  <div className="trending-tour-swiper-slide-information-links-btn">
                    <Link href="/">
                      <div className="search-btn">Book now</div>
                    </Link>
                  </div>

                  <div className="trending-tour-swiper-slide-information-links-elements">
                    <FcLike />
                  </div>

                  <div>
                    <IoIosShareAlt />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>








        </Swiper>
      </div>
    </div>
  );
};

export default TrendingTour;
