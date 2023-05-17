import React from "react";
import videoUrl from "../assets/mp4.mp4";
import videoPlay from "../assets/play.mp4";

const Home = ({ className }) => {
  return (
    <div className={className} style={{ background: "yellow" }}>
      <video controls width={"50%"}>
        <source src={videoUrl} type="video/mp4"/>
      </video>
      <video controls width={"50%"}>
        <source src={videoPlay} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Home;
