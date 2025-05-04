import React, { useState } from "react";
import InteractiveBanner from "./components/InteractiveBanner";
import Banner from "./components/Banner";
import BannerControls from "./components/BannerControls";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <InteractiveBanner />
    </div>
  );
}

export default App;
