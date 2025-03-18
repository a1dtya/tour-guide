"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import TestImage from "../../public/assets/images/gallery/car.jpg"
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { Swiper as SwiperCore, Navigation } from "swiper";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";



SwiperCore.use([Navigation]);

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

      <div className="home-featured-destinations-swiper-wrapper destination-slider-wrapp">
        <Swiper
          className="featured-destinations-swiper-wrapper"
          spaceBetween={10}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          loop={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SwiperSlide
              key={index}
              className="featured-destinations-swiper-slide"
            >
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
                <h3>Title for the featured destinatinos</h3>
                <p className="mt-[5px]">
                  <span>
                    <MdOutlineAccessTime />
                  </span>{" "}
                  Duration 2 Hour
                </p>
                <p>
                  <span>
                    <FaCarSide />
                  </span>{" "}
                  Transport Facility
                </p>
                <p>
                  <span>
                    <MdOutlinePeopleOutline />{" "}
                  </span>
                  Family Plan
                </p>
              </div>

              <div className="featured-destinations-slider-footer">
                <div className="featured-destinations-slider-footer-left">
                  <p className="review-stars">
                    <span>
                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />
                    </span>

                    <IoMdStar />
                  </p>
                  <p>548 reviews</p>
                </div>

                <div className="featured-destinations-slider-footer-right">
                  <h3>$ 35.00</h3>
                  <p className="mb-[5px]"> per person</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          <div className="swiper-button-next"><MdKeyboardArrowRight/></div>
          <div className="swiper-button-prev"><MdKeyboardArrowLeft/></div>
       
      </div>
    </div>
  );
};

export default Destinations;
