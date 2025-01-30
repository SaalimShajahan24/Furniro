import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/ProductDetail.css";
import ProductTabs from "./ProductTabs";

const ProductDetail = ({ onAddToCart }) => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  // Default product information if no state is passed via route
  const product = location.state?.product || {
    name: "Syltherine",
    price: 250000,
    tagline: "Stylish cafe chair",
    imgSrc: "/images/p1.png",
  };

  
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="product-detail">
      {/* Breadcrumb Section */}
      <div className="product-breadcrumb-detail">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span>{product.name}</span>
        </div>
      </div>
      <div className="product-container">
        {/* Product Images Section */}
        <div className="product-images">
          <div className="thumbnail-list">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={product.imgSrc}
                alt={`Thumbnail ${index}`}
                className="thumbnail"
              />
            ))}
          </div>
          <div className="main-image">
            <img src={product.imgSrc} alt={product.name} />
          </div>
        </div>

        {/* Product Information Section */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <h2 className="product-price">Rs. {product.price.toLocaleString()}</h2>
          <div className="reviews">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="customer-review">5 Customer Reviews</span>
          </div>
          <p className="product-description">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>

          {/* Size Selection */}
          <div className="size-options">
            <span>Size</span>
            <div className="sizes">
              <button className="size-button">L</button>
              <button className="size-button">XL</button>
              <button className="size-button">XS</button>
            </div>
          </div>

          {/* Color Selection */}
          <div className="color-options">
            <span>Color</span>
            <div className="colors">
              <div className="color purple"></div>
              <div className="color black"></div>
              <div className="color gold"></div>
            </div>
          </div>

          {/* Quantity Controls and Buttons */}
          <div className="action-controls">
            <div className="quantity-controls">
              <button className="quantity-button" onClick={handleDecrease}>
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-button" onClick={handleIncrease}>
                +
              </button>
            </div>
            <button className="action-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="action-button">+ Compare</button>
          </div>

          {/* Product Meta */}
          <div className="product-meta">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
            <div className="social-icons">
              <h4>Share:</h4>
              <img src="/svgs/facebook.svg" alt="Facebook" />
              <img src="/svgs/linkedin.svg" alt="LinkedIn" />
              <img src="/svgs/twitter.svg" alt="Twitter" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <ProductTabs />
    </div>
  );
};

export default ProductDetail;
