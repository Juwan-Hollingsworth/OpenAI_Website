import React from "react";
import "./body.css";
import video from "../../assets/hero__video.mp4";
import { Banner, Navbar } from "../../components";

function Body() {
  return (
    <div className="body__main">
      <h2 className="hero__title">
        Join us in shaping the future of technology.
      </h2>
      <div className="hero__btns">
        <button className="btn__A">Watch Video</button>
        <button className="btn__B">View Careers</button>
      </div>
      {/* <video loop autoPlay={true} className="hero__video" src={video} muted /> */}
      <video className="hero__video" src={video} muted />
      <Banner />
      <Navbar />
    </div>
  );
}

export default Body;
