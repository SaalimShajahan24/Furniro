import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = ({ onCartClick, cartItemCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Furniro" />
        <span>Furniro</span>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`navigation ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>About</Link> 
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      <div className="icons">
        <img src="/images/account.svg" alt="Account" />
        <img src="/images/search.svg" alt="Search" />
        <img src="/images/heart.svg" alt="Favorites" />
        
        {/* Cart Section */}
        <div
          className="cart-container"
          onClick={() => {
            if (onCartClick) {
              onCartClick();
            } else {
              console.error("onCartClick function is not defined"); 
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/cart.svg" alt="Cart" className="cart-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
