import React from "react";
import "./styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero-image.jpeg')`, // Correct inline style syntax
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',

        
      }}
      className="hero-section"
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="new-arrival">New Arrival</p>
          <h1 className="hero-title">Discover Our New Collection</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="hero-button">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

