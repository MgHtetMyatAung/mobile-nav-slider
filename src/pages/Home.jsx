import React from "react";
import videoUrl from "../assets/mp4.mp4";

const Home = ({ className }) => {
  return (
    <div className={className} style={{ background: "yellow" }}>
      <video controls>
        <source src={videoUrl} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Home;
