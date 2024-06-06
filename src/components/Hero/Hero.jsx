import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={require("./hand_icon.png")} alt="hand-icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <p>Latest collections</p>
          <img src={require("./arrow.png")} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={require("./hero_image.png")} alt="" />
      </div>
    </div>
  );
};

export default Hero;
