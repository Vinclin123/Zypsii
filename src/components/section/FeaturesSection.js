import React, { useEffect, useRef, useState } from "react";
import "./FeaturesSection.css"; // Import CSS file

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Remove this line if you want animation only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { title: "Push to Deploy", description: "Deploy updates seamlessly and efficiently." },
    { title: "SSL Certificates", description: "Enhance security with automatic SSL integration." },
    { title: "Simple Queues", description: "Manage tasks with an easy-to-use queuing system." },
    { title: "Scalable Infrastructure", description: "Grow your application without limitations." },
    { title: "Global CDN", description: "Deliver content faster to users worldwide." },
    { title: "Advanced Security", description: "Protect data with robust security protocols." },
  ];

  return (
    <section ref={sectionRef} className="features-section text-center py-5">
      <h6 className="text-danger fw-bold">FEATURES</h6>
      <h2 className="fw-bold">Your Experience Gets Better Over Time</h2>
      <p className="text-muted">
        Explore the powerful features that help your business grow with ease.
      </p>

      <div className="container">
        <div className="row justify-content-center mt-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-md-5 col-lg-3 mx-3 feature-card ${isVisible ? "fade-up" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }} // Staggered effect
            >
              <div className="feature-icon"></div>
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
