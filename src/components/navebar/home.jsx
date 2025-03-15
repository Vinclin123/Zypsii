import React, { useEffect, useState } from "react";
import image from '../../assert/header.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import { DiAppstore } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Home = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="home" className="min-vh-100 d-flex align-items-center justify-content-center p-4" >
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-white">

                <div className="col-md-6 text-center text-md-start">
                    <h1 className={`display-6 fw-bold mb-4 ${animate ? 'text-animate' : ''}`}>
                    <ReactTyped strings={["A Powerful App For Your"]} typeSpeed={100} loop/>
                         <br /> <span className="fw-bolder">Travel...</span>
                    </h1>
                    <p className={`mb-4 ${animate ? 'text-animate' : ''}`}>
                    🚀 Plan, Connect & Share Your Adventures – All in One App!
                    </p>
                    <div className={`d-flex justify-content-center justify-content-md-start gap-3 mt-5 ${animate ? 'text-animate' : ''}`}>
                        <button className="btn btn-light btn-lg text-danger fw-semibold fs-6 p-3 "><DiAppstore size={30}/>App Store</button>
                        <button className="btn btn-outline-light btn-lg fw-semibold fs-6"><IoLogoGooglePlaystore size={30} />Google Play</button>
                    </div>
                </div>

                {/* <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
                    <img
                        src={image}
                        alt="App Mockup"
                        className={`img-fluid ${animate ? 'image-animate' : ''}`}
                    />
                </div> */}
                <motion.img
                    src={image}
                    alt="App Mockup"
                    className="img-fluid col-md-6 d-flex justify-content-center mt-4 mt-md-0"
                    animate={{
                        x: [0, 5, -5, 5, 0],  // Move right and left
                        y: [0, -5, 5, -5, 0], // Move up and down
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
