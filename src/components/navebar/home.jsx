import React, { useEffect, useState } from "react";
import image from './phone.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import { DiAppstore } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
                        A Powerful App For Your <br /> <span className="fw-bolder">Business.</span>
                    </h1>
                    <p className={`mb-4 ${animate ? 'text-animate' : ''}`}>
                        From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.
                    </p>
                    <div className={`d-flex justify-content-center justify-content-md-start gap-3 mt-5 ${animate ? 'text-animate' : ''}`}>
                        <button className="btn btn-light btn-lg text-danger fw-semibold fs-6 p-3 "><DiAppstore />App Store</button>
                        <button className="btn btn-outline-light btn-lg fw-semibold fs-6"><IoLogoGooglePlaystore />Google Play</button>
                    </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
                    <img
                        src={image}
                        alt="App Mockup"
                        className={`img-fluid ${animate ? 'image-animate' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
