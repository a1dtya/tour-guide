"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import TestImage from "../public/assets/images/gallery/car.jpg";

const Destinations = () => {
  return (
    <div className="home-featured-destinations-wrapper">
      <div className="destinations-title-heading">
        <h1 className="tourguide-title-text">Featured Destinations</h1>
        <p className="tourguide-info-text mt-[10px]">
          See our newly added cities and tours as they are the best tours one
          can possibly find online, get all the information related to it by
          clicking on it
        </p>
      </div>

      <div className="home-featured-destinations-swiper-wrapper">
        <Swiper
          className="featured-destinations-swiper-wrapper"
          spaceBetween={10}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          loop={false}
        >
        
          {[1, 2, 3, 4,5,6].map((_, index) => (
            <SwiperSlide key={index} className="featured-destinations-swiper-slide">
              <div className="featured-destinations-slider-image">
                <Image
                  src={TestImage}
                  alt="relatedImage"
                  width={250}
                  height={50}
                  style={{ height: "150px", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="featured-destinations-slider-info">
                <h3>Alaska: Westminster to Greenwich River Thames</h3>
                <p>Duration 2 Hour</p>
                <p>Transport Facility</p>
                <p>Family Plan</p>
              </div>

              <div className="featured-destinations-slider-footer">
                <div className="featured-destinations-slider-footer-left">
                  <p>4 Star</p>
                  <p>548 reviews</p>
                </div>

                <div className="featured-destinations-slider-footer-right">
                  <h3>$ 35.00</h3>
                  <p>per person</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Destinations;
