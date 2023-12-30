import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { GlobalFonts } from "./assets/styles/fonts";
import { GlobalResetStyle } from "./assets/styles/cssReset";

import Home from "./Home";
import "./Library.scss";

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalResetStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
