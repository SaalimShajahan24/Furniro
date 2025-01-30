import React from "react";
import "./styles/FeaturesRow.css";

const features = [
  {
    icon: "/images/high-quality.svg", // Replace with your actual path
  },
  {
    icon: "/images/warranty-protection.svg", // Replace with your actual path
  },
  {
    icon: "/images/free-shipping.svg", // Replace with your actual path
  },
  {
    icon: "/images/support.svg", // Replace with your actual path
  },
];

const FeaturesRow = () => {
  return (
    <div className="features-row">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.icon} alt={`Feature ${index + 1}`} className="feature-icon" />
        </div>
      ))}
    </div>
  );
};

export default FeaturesRow;
