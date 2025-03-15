import React, { useEffect, useRef, useState } from "react";
import "./FeaturesSection.css"; // Import CSS file
import { TbBrandBooking } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import { FaIdeal } from "react-icons/fa";
import { MdOutlineInterests } from "react-icons/md";
import { SiStorybook } from "react-icons/si";
import { CiChat1 } from "react-icons/ci";
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
    { title: " Personalized Itineraries", description: "Tailored trips based on your interests." ,icon:<MdOutlineInterests size={50}/>},
    { title: " Real-Time Updates ", description: " Weather, flights, and local events at your fingertips.",icon:<GrUpdate size={50} /> },
    { title: "Exclusive Deals ", description: "Get the best discounts on hotels and activities." ,icon:<FaIdeal size={50} />},
    { title: "Secure Bookings ", description: "Hassle-free and safe reservations." ,icon:<TbBrandBooking size={50}/>},
    { title: "Story Section ", description: " Share your travel experiences through pictures & blogs." ,icon:<SiStorybook size={50}/> },
    { title: "Chat with Travelers", description: "Connect with friends or meet new explorers in real-time",icon:<CiChat1 size={50} /> },
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
              <div className="feature-icon">{feature.icon}</div>
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
