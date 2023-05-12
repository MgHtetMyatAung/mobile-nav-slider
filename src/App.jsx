import React, { useRef, useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

const App = () => {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);
  let startX = 0;
  let currentX = 0;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const diffX = event.touches[0].clientX - startX;
    currentX = position + diffX;
    setPosition(currentX);
  };

  const handleTouchEnd = () => {
    setPosition(currentX);
  };

  return (
    <div
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider" style={{ transform: `translateX(${position}px)` }}>
        <Home className={"slide"} />
        <Product className={"slide"} />
        <About className={"slide"} />
      </div>
    </div>
  );
};

export default App;
