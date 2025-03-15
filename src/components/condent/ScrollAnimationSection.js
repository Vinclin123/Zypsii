import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScrollAnimationSection.css";
import img from "../../assert/app-ss1.png"

const ScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="scroll-section">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between g-4">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-6 image-container animate-on-scroll fade-right">
            <img
              src={img}
              alt="Feature"
              className="feature-image"
            />
          </div>

          {/* Right Side - Text */}
          <div className="col-lg-6 col-md-6 content-container animate-on-scroll fade-left">
            <div className="text-container">
              <h2 className="fw-bold mb-3">Seamless Loyalty</h2>
              <p className="mb-4">
                Collaborate over projects with your team and clients, optimized for
                mobile and tablet.
              </p>
              <button className="btn btn-danger btn-lg">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;
