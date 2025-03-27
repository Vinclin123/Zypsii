import React from "react";
import './App.css';
import './index.css'; // Import global styles

import Navbar from "./components/navebar/navebar";
import FeaturesSection from "./components/feature/feature";
import HomePage from "./components/condentscroll/condent";
import Footer from "./components/footer/footer";
import Home from "./components/navebar/home";
import FeaturesSections from "./components/section/FeaturesSection";
import ScrollAnimationSection from "./components/condent/ScrollAnimationSection";
import AboutSection from "./components/about/about";
import Countdown from "./components/countdown/Countdown";

const App = () => {
  return (
    <div className="App">
      {/* <Countdown /> */}
      {/* <Navbar/> */}
      <Home />
      <ScrollAnimationSection />
      <FeaturesSections />
      <FeaturesSection />

      <HomePage />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;

