import React from "react";

import Navbar from "./components/navebar/navebar";
import FeaturesSection from "./components/feature/feature";
import HomePage from "./components/condentscroll/condent";
import Footer from "./components/footer/footer";
import Home from "./components/navebar/home";
import FeaturesSections from "./components/section/FeaturesSection";
import ScrollAnimationSection from "./components/condent/ScrollAnimationSection";
const App = () => {
  return (
    <div>
     {/* <Navbar/> */}
     <Home />
     <FeaturesSections/>
     <FeaturesSection/>
     <ScrollAnimationSection/>
     <HomePage/>
     <Footer/>
    </div>
  );
};

export default App;

