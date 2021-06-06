import React, { useState } from "react";

//Styles import
import "./css/Navbar.css";

// Images import
import logo from "../images/logo.svg";
import bars from "../images/icons/menuBars.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img className="logo" src={logo} alt="Welcome to Building Blocks!" />
      </div>

      <div className="navbarRight">
        <div className="navbarLinks">
          <a className="blackNavLinks" href="/">
            About Us
          </a>
          <a className="blackNavLinks" href="/">
            Our Team
          </a>
          <a className="blackNavLinks" href="/">
            Updates
          </a>
          <a className="blackNavLinks" href="/">
            Contact
          </a>

          <a href="/login" className="blueNavLinks">
            Login
          </a>
          <a href="/signup" className="blueNavLinks">
            Sign Up{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
