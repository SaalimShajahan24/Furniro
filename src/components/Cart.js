import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./styles/Cart.css";
import { FaTrash } from "react-icons/fa6";
import FeaturesRow from "./FeaturesRow"; // Import FeaturesRow component
import Footer from "./Footer";

const Cart = ({ cartItems }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [quantities, setQuantities] = useState(
    cartItems.map((item) => item.quantity)
  );

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const calculateSubtotal = () =>
    cartItems.reduce(
      (acc, item, index) => acc + item.price * quantities[index],
      0
    );

  return (
    <div className="cart-page">
      {/* Header Section */}
      <header
        style={{
          backgroundImage: `url("/images/sh1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "316px",
        }}
      >
        <div className="cart-header1">
          <h1>Cart</h1>
          <p>
            Home &gt; <span>Cart</span>
          </p>
        </div>
      </header>

      {/* Cart Content */}
      <div className="cart-content">
        {/* Cart Table */}
        <div className="cart-table-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="cart-product">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="product-image"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td>Rs. {item.price.toLocaleString()}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={quantities[index]}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      className="quantity-input"
                    />
                  </td>
                  <td>
                    Rs.{" "}
                    {(item.price * quantities[index]).toLocaleString()}
                  </td>
                  <td>
                    <button className="remove-item"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="cart-totals">
          <h3>Cart Totals</h3>
          <div className="totals-details">
            <div className="totals-row">
              <span>Subtotal:</span>
              <span>Rs. {calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="totals-row total">
              <span>Total:</span>
              <span>Rs. {calculateSubtotal().toLocaleString()}</span>
            </div>
          </div>
          <button
            className="checkout-button"
            onClick={() => navigate("/checkout")} // Navigate to the Checkout page
          >
            Check Out
          </button>
        </div>
      </div>
      
      {/* Features Section */}
      <FeaturesRow />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Cart;
