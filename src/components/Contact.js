import React from "react";
import "./styles/Contact.css";
import FeaturesRow from "./FeaturesRow"; // Import FeaturesRow component
import Footer from "./Footer";


const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header
        className="contact-header"
        style={{
          backgroundImage: `url("/images/sh1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "316px",
        }}
      >
        <div className="contact-header-content">
          <h1>Contact</h1>
          <p>Home &gt; Contact</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="contact-content">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services, Please Feel Free
          To Drop Us 
        <br></br>An Email. Our Staff Always Be There To Help You Out. Do
        Not Hesitate!</p>

        <div className="contact-info-form">
          {/* Contact Information */}
          <div className="contact-info">
           <div className="contentinfo-contents">
            <div className="info-item">
              <img src="/svgs/Address.svg" alt="Address Icon" className="svg-icon" />
              <div class="address">
                <h4>Address</h4>
                <p>236 6th SE Avenue, New <br></br>York NY10000, United <br></br>States</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/svgs/Phone.svg" alt="Phone Icon" className="svg-icon" />
              <div>
                <h4>Phone</h4>
                <p>Mobile: (+84) 546-6789</p>
                <p>Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/svgs/Working.svg" alt="Working Time Icon" className="svg-icon" />
              <div>
                <h4>Working Time</h4>
                <p>Monday–Friday: 9:00 – 22:00</p>
                <p>Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form class="form-class">
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Email address" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="This is an optional" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Hi! I'd like to ask about" rows="4" />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
       {/* Features Section */}
       <FeaturesRow />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;
