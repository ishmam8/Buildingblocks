import React from "react";

//Component Imports
import Navbar from "./Navbar";
import Footer from "./Footer";

//Style Imports
import "./css/ContactUs.css";
import ContactImage from "../images/contact-us-image.svg";

export default function ContactUs() {
  return (
    <div className="contact-us-body">
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-us-banner">Contact Us</div>
        <div className="contact-us-text">
          If your student group wants to use Building Blocks for your peer
          mentoring program, or you’d like to get invovled with Building Blocks,
          shoot us an email!
          <br />
          <br />
          We’ll do our best to respond in one business day.
        </div>
        <div className="contact-us-email">buildingblocksapp@gmail.com</div>
        <div className="contact-us-image">
          <img src={ContactImage} alt="icon" />
        </div>
      </div>
    </div>
  );
}
