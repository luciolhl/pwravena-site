import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/fontawesome.scss";
import "./css/style.scss";
import "./css/swiper.scss";
import Download from "./pages/Download";
import Sobre from "./pages/Sobre";
import Rank from "./pages/Rank";

export default function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/download" element={<Download />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/rank" element={<Rank />} />
      </Routes>
  );
}
