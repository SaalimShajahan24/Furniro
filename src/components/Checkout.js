import React from "react";
import "./styles/Checkout.css";
import FeaturesRow from "./FeaturesRow"; // Import FeaturesRow component
import Footer from "./Footer";

const Checkout = ({ cartItems }) => {
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      {/* Header Section */}
      <header
        className="checkout-header"
        style={{
          backgroundImage: `url("/images/sh1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "316px",
        }}
      >
        <div className="checkout-header-content">
          <h1>Checkout</h1>
          <p>Home &gt; Checkout</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="checkout-content">
        {/* Billing Details */}
        <div className="billing-details">
          <form>
          <h2>Billing details</h2>
            <div className="form-row">
              <div class="form-name">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div class="form-name">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <div class="form-content">
              <label>Company Name (Optional)</label>
              <input type="text" />
            </div>
            <div class="form-content">
              <label>Country / Region</label>
              <select>
                <option value="">Select a country</option>
                <option>Sri Lanka</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <div class="form-content">
              <label>Street Address</label>
              <input type="text" required />
            </div>
            <div class="form-content">
              <label>Town / City</label>
              <input type="text" required />
            </div>
            <div class="form-content">
              <label>Province</label>
              <input type="text" required />
            </div>
            <div class="form-content">
              <label>ZIP Code</label>
              <input type="text" required />
            </div>
            <div class="form-content">
              <label>Phone</label>
              <input type="text" required />
            </div>
            <div class="form-content">
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div class="form-content">
              <label>Additional Information</label>
              <textarea rows="4" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Product</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="order-item">
                <span>{item.name} x {item.quantity}</span>
                <span>Rs. {item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="order-totals">
            <div>
              <span>Subtotal</span>
              <span>Rs. {calculateSubtotal().toLocaleString()}</span>
            </div>
            <div>
              <span>Total</span>
              <span className="total-price">
                Rs. {calculateSubtotal().toLocaleString()}
              </span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="payment-methods">
            <h3>Payment</h3>
            <div className="payment-option">
              
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="payment-option">
            <input type="radio" name="payment" id="bank-transfer" />
            <label htmlFor="bank-transfer">Direct Bank Transfer</label>
            <div></div>
              <input type="radio" name="payment" id="cod" />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
            <p className="privacy-policy">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our <a href="/privacy">privacy policy</a>.
            </p>
          </div>

          {/* Place Order Button */}
          <div class="place-order"><button className="place-order-button">Place Order</button></div>
        </div>
      </div>
      {/* Features Section */}
      <FeaturesRow />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Checkout;
