import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "./home.css"; // Custom CSS for styling
import vedio from "../../assert/travel.mp4"
import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import logo from "../../assert/logo.png";
import { DiAppstore } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Toggle video mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="hero-container">
      {/* Background Video */}
      <video ref={videoRef} autoPlay loop muted={isMuted} className="hero-video">
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="" width="30" height="40" className="d-inline-block align-text-top" />
            <span className="logo-text ms-2 fw-bold text-white">Zypsii</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#nearest">Nearest</a></li>
              <li className="nav-item"><a className="nav-link" href="#track">Track</a></li>
              
              <li className="nav-item"><a className="nav-link" href="#explore">Explore</a></li>
              <li className="nav-item"><a className="nav-link" href="#chat">chat</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="btn position-absolute top-0 end-0 mt-5 mute-button"
        style={{ zIndex: 1 }}
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>

      {/* Content Overlay */}
      <div className="hero-overlay">
        <div className="container text-center text-white">
          <h1 className="fw-bold">A Powerful App for Your Travel</h1>
          <p>Plan, Connect & Share Your Adventures – All in One App!</p>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary"><DiAppstore size={30}/>App Store</button>
            <button className="btn btn-dark "><IoLogoGooglePlaystore size={30} />Google Play</button>
          </div>

          {/* Explore & Plan Section */}
          <div className="row mt-5">
            <div className="col-md-6">
              <h3>Explore the World</h3>
              <p>Discover new places, meet new people, and create unforgettable memories.</p>
            </div>
            <div className="col-md-6">
              <h3>Plan Your Trip</h3>
              <p>Start planning today and make your next adventure the best one yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
