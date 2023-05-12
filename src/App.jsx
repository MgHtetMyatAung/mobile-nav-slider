import React, { useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

const data = [
  {
    id: 1,
    path: "/",
    component: <Home className={"container"} />,
  },
  {
    id: 2,
    path: "/product",
    component: <Product className={"container"} />,
  },
  {
    id: 3,
    path: "/about",
    component: <About className={"container"} />,
  },
];

const App = () => {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);
  const history = useLocation();
  const navigation = useNavigate();
  let startX = 0;
  let currentX = 0;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
    console.log(startX);
  };

  const handleTouchMove = (event) => {
    if (startX > 180) {
      setPosition(position + 1);
      if (position < data.length) {
        navigation(data[position].path);
        console.log(position);
      } else {
        // setPosition(2);
      }
    } else if (startX < 180 && position>=0) {
      setPosition( position - 1);
      if (position < data.length && position>0) {
        navigation(data[position].path);
        console.log(position);
        navigation(data[position].path);
      } else {
        console.log(position);
      }
    }
  };

  const handleTouchEnd = () => {};

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Routes>
        {data.map((route) => (
          <Route path={route.path} element={route.component} key={route.id} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
