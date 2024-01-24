import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/uni.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">AboutALumni</p>
        <h2 className="primary-heading">
          Bundelkhand University Alumni Association
        </h2>
        <p className="primary-text">
          The Bundelkhand University Alumni Association is a vibrant and active community that brings together graduates of Bundelkhand University from various disciplines and years. Committed to fostering lifelong connections, the association serves as a bridge between alumni and the alma mater, creating a network that extends beyond the academic years.
        </p>
        <h1>Message </h1>
        <p className="primary-text">
          Joining the Bundelkhand University Alumni Association offers opportunities to reconnect with former classmates, stay updated on university developments, and contribute to the success of future generations. Whether you are a recent graduate or a seasoned professional, your involvement is valued.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
