import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Funiro.</h3>
          <p className="address">400 University Drive Suite 200 Coral Gables,</p>
          <p className="address">FL 33134 USA</p>
        </div>
        <div className="footer-section">
          <h4 className="section-title">Links</h4>
          <ul>
            <li className="footer-link">Home</li>
            <li className="footer-link">Shop</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="section-title">Help</h4>
          <ul>
            <li className="footer-link">Payment Options</li>
            <li className="footer-link">Returns</li>
            <li className="footer-link">Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h4 className="section-title">Newsletter</h4>
          <div className="newsletter-input">
            <input
              type="text"
              className="email-input"
              placeholder="Enter Your Email Address"
            />
            <span className="subscribe">SUBSCRIBE</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-note">2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
