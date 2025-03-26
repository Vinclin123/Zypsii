import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "./home.css"; // Custom CSS for styling
import vedio from "../../assert/travel.mp4"
import { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import logo from "../../assert/logo.png";
import { DiAppstore } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Typed from 'typed.js';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'A Powerful App to connect <span style="color: #b300b3;">Traveler\'s</span>',
        'Inspired by <span style="color: #b300b3;"> into the world</span>',
        'Plan your next <span style="color: #b300b3;">adventure</span>',
        'Explore the <span style="color: #b300b3;">world</span>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 5000,
      showCursor: true,
      cursorChar: '|',
      startDelay: 1000,
      html: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top container-fluid">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="" width="30" height="40" className="d-inline-block align-text-top" />
            <span className="logo-text ms-2 fw-bold "style={{color:"#b300b3"}}>Zypsii</span>
          </a>
          <button
            className="navbar-toggler"
            style={{color:"#b300b3"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{backgroundColor:"#b300b3"}}></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav" >
              <li className="nav-item"><a className="nav-link fw-bold" href="#nearest" style={{color:"#b300b3"}}>Nearest</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="#track" style={{color:"#b300b3"}}  >Track</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="#explore" style={{color:"#b300b3"}}>Explore</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="#chat" style={{color:"#b300b3"}}>Chat</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="#about" style={{color:"#b300b3"}}>About</a></li>
              <li className="nav-item"><a className="nav-link fw-bold" href="#contact" style={{color:"#b300b3"}}>Contact</a></li>
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
          <h1 className="fw-bold">
            <span ref={el}></span>
          </h1>
          <p ><span className="logo-text ms-2 fw-bold "style={{color:"#b300b3"}}>Plan, Connect & Share</span> Your Adventures – All in One App!</p>
          
          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary"><DiAppstore size={30}/>App Store</button>
            <button className="btn btn-dark "><IoLogoGooglePlaystore size={30} />Google Play</button>
          </div>

          {/* Explore & Plan Section */}
          <div className="row mt-5">
            <div className="col-md-6 fade-left">
              <h3>Explore the World</h3>
              <p>Discover new places, meet new people, and create unforgettable memories.</p>
            </div>
            <div className="col-md-6 fade-right">
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
