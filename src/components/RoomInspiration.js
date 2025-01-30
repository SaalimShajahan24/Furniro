import React, { useState } from "react";
import "./styles/RoomInspiration.css";

const images = [
  "/images/room1.png",
  "/images/room2.png",
  "/images/room3.png",
];

const RoomInspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="room-inspiration">
      <div className="inspiration-left">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="explore-button">Explore More</button>
      </div>
      <div className="inspiration-right">
        <button className="carousel-arrow arrow-left" onClick={handlePrev}>
          &#8249;
        </button>
        <div
          className="carousel-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="carousel-slide">
              <img src={img} alt={`Room ${index}`} className="carousel-image" />
              <div className="carousel-caption">
                <p className="room-type">01 - Bed Room</p>
                <h3 className="room-title">Inner Peace</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow arrow-right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default RoomInspiration;
