import React from "react";

import Navbar from "./components/navebar/navebar";
import FeaturesSection from "./components/feature/feature";
import HomePage from "./components/condentscroll/condent";
import Footer from "./components/footer/footer";
import Home from "./components/navebar/home";
import FeaturesSections from "./components/section/FeaturesSection";
import ScrollAnimationSection from "./components/condent/ScrollAnimationSection";
import AboutSection from "./components/about/about";

const App = () => {
  return (
    <div>
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

