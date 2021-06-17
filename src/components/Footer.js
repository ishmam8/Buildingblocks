import React from "react";
import "./css/Footer.css";
import { Redirect, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <Link to="/">
          <ul className="leftFooterLinks">About Us</ul>
        </Link>
        <Link to="/">
          <ul className="leftFooterLinks">Our Team</ul>
        </Link>
        <Link to="/">
          <ul className="leftFooterLinks">Updates</ul>
        </Link>
        <Link to="/">
          <ul className="leftFooterLinks">Contact</ul>
        </Link>
        <Link to="/login">
          <ul className="blueFooterLinks">Login</ul>
        </Link>
        <Link to="/signup">
          <ul className="blueFooterLinks">Sign Up</ul>
        </Link>
      </div>
      <div className="rightFooterContainer">
        {/* Footer containing T&C, Privacy Policy */}
        <Link to="/">
          <ul>Terms & Conditions</ul>
        </Link>
        <Link to="/">
          <ul>Privacy Policy</ul>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
