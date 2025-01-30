import React from "react";
import "./styles/Shop.css";
import ProductGrid from "./ProductGrid"; // Import ProductGrid component
import FeaturesRow from "./FeaturesRow"; // Import FeaturesRow component
import Footer from "./Footer"; // Import Footer

const Shop = () => {
  return (
    <div className="shop-page">
      {/* Header Section */}
      <header
        style={{
          backgroundImage: `url("/images/sh1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "316px",
        }}
        className="shop-header"
      >
        <div className="shop-header-content">
          <h1>Shop</h1>
          <nav>
            <span>Home</span> <span>&gt;</span> <span>Shop</span>
          </nav>
        </div>
      </header>

      {/* Controls Section */}
      <section className="shop-content">
        <div className="shop-controls">
          <button className="filter-button">
            <img src="/svgs/filter.svg" alt="Filter" />
            <span>Filter</span>
          </button>
          <div className="grid-icons">
            <img src="/svgs/grid1.svg" alt="Grid View" />
            <img src="/svgs/grid3.svg" alt="List View" />
          </div>
          <p className="results-text">Showing 1–16 of 32 results</p>
          <div className="show-options">
            <span>Show</span>
            <select>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
          <div className="sort-options">
            <span>Sort by</span>
            <select>
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <ProductGrid />

      {/* Features Section */}
      <FeaturesRow />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Shop;
