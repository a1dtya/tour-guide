import React from "react";

import Gallery from "@/components/Gallery";
import Blogs from "@/components/home/Blogs";
import Destinations from "@/components/Destinations";
import RelatedTour from "@/components/listings/RelatedTour";

const page = () => {
  return (
    <div className="tours-list-wrapper">
      tour /london
      <section className="home-featured-destinations-section-wrapper">
        <div className="container">
          <RelatedTour message={"hello"} />
        </div>
      </section>
  

      
      <section className="home-gallery-section-wrapper ">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <section className="home-latest-blogs-section-wrapper ">
        <div className="container">
          <Blogs />
        </div>
      </section>
    </div>
  );
};

export default page;
