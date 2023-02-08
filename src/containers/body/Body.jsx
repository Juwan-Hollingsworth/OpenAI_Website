import React from "react";
import "./body.css";
import video from "../../assets/hero__video.mp4";
import { Banner } from "../../components";

function Body() {
  return (
    <div className="body__main">
      <h2 className="hero__title">
        Join us in shaping the future of technology.
      </h2>
      <video loop autoPlay={true} className="hero__video" src={video} muted />
      <Banner />
    </div>
  );
}

export default Body;
