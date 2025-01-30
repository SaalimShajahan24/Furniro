import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ShoppingCart.css";

const ShoppingCart = ({ cartItems = [], onClose, onRemoveItem }) => {
  const navigate = useNavigate();
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.imgSrc} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">
                  {item.quantity} x Rs. {item.price.toLocaleString()}
                </p>
              </div>
              <button
                className="remove-item"
                onClick={() => onRemoveItem(index)}
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
      <div className="cart-footer">
        <p className="subtotal">
          <span className="name">Subtotal:</span>{" "}
          <span className="amount">Rs. {calculateSubtotal().toLocaleString()}</span>
        </p>
        <div className="cart-actions">
          {/* <button className="action-button">Cart</button> */}
          <button className="action-button">Checkout</button>
          <button
              className="action-button"
              onClick={() => navigate("/comparison")}
            >
              Comparison
            </button>
            <button
  className="action-button"
  onClick={() => navigate("/cart")}
>
 Cart
</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
