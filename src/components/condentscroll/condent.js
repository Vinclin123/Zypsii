import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./styles.css"; // Import the CSS file
import img1 from "../../assert/Screenshot__69_-removebg-preview.png";
import img2 from "../../assert/Screenshot__70_-removebg-preview.png";
import img3 from "../../assert/Screenshot__71_-removebg-preview.png";
const TravelSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: false, // Ensures animation happens every time the element enters the viewport
      mirror: true, // Triggers animation when scrolling back up
    });
  }, []);
  

  return (
    <div className="container travel-section">
      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src={img1}
            alt="Travel"
            className="travel-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2 className="fw-bold mobile">Plan Your Extraordinary Getaway</h2>
          <p>Search from our 65+ destinations and book your stay with ease.</p>
        </div>
      </div>

      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-6" data-aos="fade-left">
          <img
            src={img2}
            alt="Adventure"
            className="travel-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-right">
          <h2 className="fw-bold mobile">Book Your Next Adventure</h2>
          <p>Experience hassle-free booking with our secure payment method.</p>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src={img3}
            alt="Explore"
            className="travel-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2 className="fw-bold mobile">Travel & Explore</h2>
          <p>Embark on a thrilling adventure with amazing experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
