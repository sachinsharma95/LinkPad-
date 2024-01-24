import React from "react";
import Logo from "../Assets/l.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Jobs</span>
          <span>Carrier Growth</span>
          <span>Clubs</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>AluminiAssociation</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>bujhansi@.com</span>
          <span>Alumni@Bu.com</span>
          <span>contact@bujhansi.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
