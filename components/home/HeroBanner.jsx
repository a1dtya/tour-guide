"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const HeroBanner = () => {
  const [videoPopUp, setVideoPopUp] = useState(false);

  const playVideo = () => {
    setVideoPopUp(!videoPopUp);
    console.log("startplaying changd");
  };

  return (
    <div className="hero-banner-wrapper">
      <video autoPlay muted loop className="hero-background-video">
        <source src="/assets/images/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-banner-information">
        <div className="hero-banner-title">
          <h1>We Find The Best Tours For You</h1>
        </div>

        <div className="hero-banner-description">
          <p>
            Discover unforgettable experiences with our curated tours across the
            world's most exciting cities. Whether you're seeking adventure,
            culture, or relaxatione!
          </p>
        </div>

        <div className="hero-banner-play">
          <div className="hero-banner-play-btn" onClick={playVideo}>
            <FaPlay />
          </div>

          <div className="hero-banner-play-info ">Watch Video</div>
        </div>
      </div>

      <div className="hero-banner-searchbox ">
        <div className="searchbox-content">
          <div className="hero-searchbox-item-1">
            <div className="searchbox-items-icon">
              <FaLocationDot />
            </div>

            <div className="searchbox-items-info">
              <p>Location</p>
              <input name="query" placeholder="Search for a destination" />
            </div>
          </div>

          <div className="hero-searchbox-item-1">
            <div className="searchbox-items-icon">
              <PiUsersFill />
            </div>

            <div className="searchbox-items-info">
              <p>guests</p>
              <input name="query" placeholder="guests how many guests" />
            </div>
          </div>

          <div className="hero-searchbox-item-1">
            <div className="searchbox-items-icon">
              <SlCalender />
            </div>

            <div className="searchbox-items-info">
              <p>date</p>
              <input type="text" placeholder="Pick a date" />
            </div>
          </div>

          <div className="searchbox-searchbar">
            <div className="search-btn">search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
