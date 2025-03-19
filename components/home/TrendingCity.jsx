"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";


const TrendingCity = () => {
  const [openVideoModel, setOpenVideoModel] = useState(false);
  const [videoPopUp, setVideoPopUp] = useState(false);

  const playVideo = () => {
    setVideoPopUp(!videoPopUp);
    console.log("startplaying changd");
  };
  const closeModal = () => {
    setVideoPopUp(false);
  };

  

  return (
    <div className="trending-city-wrapper">
      <div className="trending-city-banner-video">
        

        <div className="hero-background-video blur-bottom">

            <Image

                src={"/assets/media/trending-city/london-video.png"}
                alt="trending-city-image"
             fill={true}


            />
              

        </div>
        
        {/* <video autoPlay muted loop className="hero-background-video blur-bottom">
          <source src="/assets/images/videoBanner/london2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

  

        <div className="trending-banner-play-wrapper left-middle-btns ">
        <div className="hero-banner-play btn-bg" style={{borderRadius:"15px"}}>
          <div className="hero-banner-play-btn " onClick={playVideo}>
            <FaPlay />
          </div>

          <div className="hero-banner-play-info  " style={{color:'var(--color-green-light)'}}>Watch Video</div>
        </div>

        </div>


      </div>
      <div className="trending-city-banner-overlay-blur">

      </div>

      <div className="container">

      </div>


      <div className="trending-city-banner-title">
        <div className="trending-city-heading">
          <h2
            className="tourguide-title-text"
            style={{ color: "var(--color-white)" }}
          >
            Smart city tour london
          </h2>
        </div>

        <div className="btn-type-2">Explore Now</div>
      </div>
           {videoPopUp && (
              <div className="video-modal-overlay" onClick={closeModal}>
                <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="video-modal-header">
                    <button onClick={closeModal} className="close-btn"><IoIosCloseCircle/></button>
                  </div>
                  <div className="video-player-container">
                    <video width="100%" height="100%" controls autoPlay>
                    <source src="/assets/images/videoBanner/london2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default TrendingCity;
