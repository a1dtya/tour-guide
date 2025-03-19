"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import bannerImage from "../../public/assets/media/home/herobanner/HeroBanner.png";
import bannerImage2 from "../../public/assets/media/home/herobanner/gradient.png";
import { IoIosCloseCircle } from "react-icons/io";

// import heroBanner from '../../public/assets/images/hero-banner-2.mp4';

const HeroBanner = () => {
  const [videoPopUp, setVideoPopUp] = useState(false);

  const playVideo = () => {
    setVideoPopUp(!videoPopUp);
    console.log("startplaying changd");
  };
  const closeModal = () => {
    setVideoPopUp(false);
  };


  return (
    <div className="hero-banner-wrapper">
      {/* 
      <div className="hero-background-video-gradient">
          <Image
          src={bannerImage2}
          alt="Banner Image"
          fill={true}
        style={{objectFit:"contain"}}
          />


        </div> */}

      {/* <div className="hero-background-video">
        <Image src={bannerImage} alt="Banner Image" fill={true} />
      </div> */}

      
      <video autoPlay muted loop className="hero-background-video">
        <source src="/assets/images/hero-banner-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-banner-information">
        <div className="hero-banner-title">
          <h1>We Find The Best Tours For You</h1>
        </div>

        <div className="hero-banner-description">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
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
              <input type="date" placeholder="Pick a date" />
            </div>
          </div>

          <div className="searchbox-searchbar">
            <div className="btn-type-2">search</div>
          </div>
        </div>
      </div>

            {/* Modal-video */}
      {videoPopUp && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <button onClick={closeModal} className="close-btn"><IoIosCloseCircle/></button>
            </div>
            <div className="video-player-container">
              <video width="100%" height="100%" controls autoPlay>
                <source src="/assets/images/hero-banner-3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HeroBanner;
