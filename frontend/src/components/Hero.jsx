import React from "react";

// Hero component
const Hero = () => {
  return (
    // Hero container
    <div className="heroContainer">
      <div className="content">
        <div className="text">
          {/* Main heading */}
          <h1 className="mb-3 navbar-brand">Take It Cheesy</h1>
          {/* Subheading */}
          <h4 className="mb-3">Nothing brings people together like good food.</h4>
          {/* Reservation button */}
          <a
            className="btn btn-outline-light btn-lg"
            href="/booking"
            role="button"
          >
            Reservate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
