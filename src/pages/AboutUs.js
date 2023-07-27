import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="header-about-us-container">
        <img className="header-logo-1" alt="" src="logo-small.png" />
        <img className="header-logo-2" alt="" src="hero-logo-small.png" />
        <button
          className="about-us-menu-button"
          autoFocus
        >
          <span>MENU</span>
        </button>
      </header>
      <span className="about-us-span-about">ABOUT</span>
      {/* <div className="about-us-first-span-div"></div> */}
    </div>
  );
};

export default AboutUs;
