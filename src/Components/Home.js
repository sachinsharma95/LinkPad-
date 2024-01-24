import React from "react";
import BannerBackground from "../Assets/nh-bg.png";
import BannerImage from "../Assets/college.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Bridging
              The gap between
            
            Talent, Colleges, and Alumni
          </h1>
          <p className="primary-text">
          By working together, talent, colleges, &
alumni can make a difference in the world and build a better future for everyone.
          </p>
          <button className="secondary-button">
            Explore Now  <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
