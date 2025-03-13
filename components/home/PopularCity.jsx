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

const Popularcities = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedCity, setSelectedCity] = useState(cityData[0].id);
  const [ selectedTourCity, setSelectedTourCity ] = useState ( tourData.cities[0].id);


  const handleFilterClick = (cityId) => {
    setSelectedCity(cityId);
    setSelectedTourCity(cityId);
    console.log( " tourCity details: ", selectedTourCity)
    console.log(" image from the tourCIty:  ", tourCity.image)
    console.log( " tourCity Name: ", tourCity.city_name)
    // console.log("  tourCIty: descriptions  ", tourCity.description)

  };

  const city = cityData.find((city) => city.id === selectedCity);
  const tourCity = tourData.cities.find((tourCity)=> tourCity.id  === selectedTourCity);

  

  return (
    <div className="popularcity-wrapper">
      <div className="popularcity">
        <div className="popularcity-title">
          <h2>Explore Popular Cities</h2>
          <p>
            Explore the world's most visited cities. These top 10 destinations
            captivate millions of tourists annually with their unique blend of
            cultural richness and unforgettable experiences.
          </p>
        </div>

      

          <div className="popularcity-filter-btns">
            {tourData.cities.map((tourCity) => (
              <div
                key={tourCity.id}
                className="popular-btns"
                onClick={() => handleFilterClick(tourCity.id)}
              >
                {tourCity.city_name}
              </div>
            ))}
          </div>







        <div className="popularcity-banner-image">
          <Image
            src={tourCity.image}
            alt={`${tourCity.image_alt} Image`}
            width={800}
            height={400}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        </div>

        <div className="popularcity-banner-city-info ">
          <div className="popularcity-banner-city-info-content w-full lg:w-2/3">
            <div className="popularcity-banner-city-info-content-text-heading">
              <h2>{tourCity.city_name}</h2>
              <p>{tourCity.description}</p>
            </div>
          </div>
          <div className=" tag-items-wrapper  w-full md:w-1/3 h-full">
            <div className="tag-item">adsasds</div>
            <div className="tag-item">adsasds</div>
            <div className="tag-item">adsasds</div>
          </div>
        </div>

        <div
          className="home-featured-destinations-swiper-wrapper"
          style={{ width: "100%", margin: "0 auto" }}
        >
          <Swiper
            className="featured-destinations-swiper-wrapper "
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
            {[1, 2, 3, 4].map((_, index) => (
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
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "cover",
                    }}
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
    </div>
  );
};

export default Popularcities;
