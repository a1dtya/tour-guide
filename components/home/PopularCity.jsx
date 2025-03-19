"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cityData from "../../public/assets/data/popularTour.json";
import tourData from "../../public/assets/data/tourData.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testImage from "../../public/assets/images/alaska.jpg";
import TestImage from "../../public/assets/images/gallery/car.jpg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

const Popularcities = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedCity, setSelectedCity] = useState(cityData[0].id);
  const [selectedTourCity, setSelectedTourCity] = useState(
    tourData.cities[0].id
  );

  const handleFilterClick = (cityId) => {
    setSelectedCity(cityId);
    setSelectedTourCity(cityId);
    console.log(" tourCity details: ", selectedTourCity);
    console.log(" image from the tourCIty:  ", tourCity.image);
    console.log(" tourCity Name: ", tourCity.city_name);
    // console.log("  tourCIty: descriptions  ", tourCity.description)
  };

  const city = cityData.find((city) => city.id === selectedCity);
  const tourCity = tourData.cities.find(
    (tourCity) => tourCity.id === selectedTourCity
  );

  return (
    <div className="popularcity-wrapper">
      <div className="popularcity">
        <div className="popularcity-title">
          <h2>Explore Popular Cities</h2> 
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit
          </p>
        </div>
        <div className="popularcity-filter-btns">
          {tourData.cities.map((tourCity) => (
            <div
              key={tourCity.id}
              className={`popular-btns ${
                selectedCity === tourCity.id ? "active" : ""
              }`}
              onClick={() => handleFilterClick(tourCity.id)}
            >
              {tourCity.city_name}
            </div>
          ))}
        </div>

        <div
          key={selectedCity}
          className="popularcity-banner-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={tourCity.image}
            alt={`${tourCity.image_alt} Image`}
            width={800}
            height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <div className="popularcity-banner-city-info ">
            <div className="popularcity-banner-city-info-content w-full lg:w-2/3">
              <motion.div
                key={selectedCity}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="popularcity-banner-city-info-content-text-heading"
              >
                <h2>{tourCity.city_name}</h2>
                <p>{tourCity.description}</p>
              </motion.div>
            </div>
            <div
              // key={selectedCity}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ duration: 2 }}
              className=" tag-items-wrapper  w-full md:w-1/3 h-full"
            >
              <div className="tag-item">adsasds</div>
              <div className="tag-item">adsasds</div>
              <div className="tag-item">adsasds</div>
            </div>
          </div>
        </div>

        {/* <div className="popularcity-banner-city-info ">
          <div className="popularcity-banner-city-info-content w-full lg:w-2/3">
            <div
              // key={selectedCity}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ duration: 2 }}
              className="popularcity-banner-city-info-content-text-heading"
            >
              <h2>{tourCity.city_name}</h2>
              <p>{tourCity.description}</p>
            </div>
          </div>
          <div
            // key={selectedCity}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 2 }}
            className=" tag-items-wrapper  w-full md:w-1/3 h-full"
          >
            <div className="tag-item">adsasds</div>
            <div className="tag-item">adsasds</div>
            <div className="tag-item">adsasds</div>
          </div>
        </div> */}
        <div
          className="centered-swiper"
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            // key={selectedCity}
            // initial="hidden"
            // whileInView="visible"
            // variants={itemVariants}
            // transition={{ duration: 1.5, delay: 0 }}
            // viewport={{ once: true }}
            className="home-featured-destinations-swiper-wrapper"
          >
            <Swiper
              className="featured-destinations-swiper-wrapper "
              spaceBetween={0}
              slidesPerView={"auto"}
              loop={true}
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
            >
              {tourCity.related_city_tours.map((tour) => (
                <SwiperSlide
                  // key={index}
                  key={tour.tour_id}
                  className="featured-destinations-swiper-slide"
                >
                  <Link href={`/tours/${tourCity.slug}/${tour.tour_slug}/`}>
                    <div className="featured-destinations-slider-image">
                      <Image
                        src={tour.tour_image}
                        alt="relatedImage"
                        width={250}
                        height={50}
                        style={{
                          height: "150px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="featured-destinations-slider-info">
                      <h3>{tour.tour_city_title}</h3>
                      <p className="mt-[5px]">
                        {" "}
                        <span>
                          {" "}
                          <MdOutlineAccessTime />
                        </span>{" "}
                        Duration 2 Hour
                      </p>
                      <p>
                        {" "}
                        <span>
                          <FaCarSide />
                        </span>{" "}
                        Transport Facility
                      </p>
                      <p>
                        {" "}
                        <span>
                          {" "}
                          <MdOutlinePeopleOutline />{" "}
                        </span>{" "}
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
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularcities;
