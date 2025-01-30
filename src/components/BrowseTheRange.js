import React from "react";
import "./styles/BrowseTheRange.css";

const BrowseTheRange = () => {
  const ranges = [
    {
      title: "Dining",
      imgSrc: "/images/dining.png",
    },
    {
      title: "Living",
      imgSrc: "/images/living.png",
    },
    {
      title: "Bedroom",
      imgSrc: "/images/bedroom.png",
    },
  ];

  return (
    <section className="browse-range">
      <h2 className="browse-title">Browse The Range</h2>
      <p className="browse-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="range-grid">
        {ranges.map((range, index) => (
          <div key={index} className="range-card">
            <img src={range.imgSrc} alt={range.title} className="range-image" />
            <p className="range-title">{range.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseTheRange;
