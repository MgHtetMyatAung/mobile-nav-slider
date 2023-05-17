import React, { useRef, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Map from "./pages/Map";

const data = [
  {
    id: 1,
    path: "/",
    component: <Home className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 2,
    path: "/product",
    component: <Product className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 3,
    path: "/about",
    component: <About className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 4,
    path: "/map",
    component: <Map className={"container animate__animated animate__fadeIn"} />,
  },
];

const App = () => {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  let startX = 0;
  let currentX = 0;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const diffX = event.touches[0].clientX - startX;
    currentX = position + diffX;
  };

  const handleTouchEnd = () => {
    const screenWidth = window.innerWidth;
    const threshold = screenWidth / 4;

    if (currentX < -threshold && position < data.length - 1) {
      setPosition((prevPosition) => prevPosition + 1);
      navigate(data[position + 1].path);
    } else if (currentX > threshold && position > 0) {
      setPosition((prevPosition) => prevPosition - 1);
      navigate(data[position - 1].path);
    }
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    sliderElement.addEventListener("touchstart", handleTouchStart);
    sliderElement.addEventListener("touchmove", handleTouchMove);
    sliderElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      sliderElement.removeEventListener("touchstart", handleTouchStart);
      sliderElement.removeEventListener("touchmove", handleTouchMove);
      sliderElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div ref={sliderRef} className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(${position}px)` }}
      >
        <Routes>
          {data.map((route) => (
            <Route path={route.path} element={route.component} key={route.id} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
