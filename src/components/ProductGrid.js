import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./styles/ProductGrid.css";

const products = [
  {
    name: "Syltherine",
    tagline: "Stylish cafe chair",
    price: 2500000,
    imgSrc: "/images/p1.png",
    type: "sale",
  },
  {
    name: "Leviosa",
    tagline: "Stylish cafe chair",
    price: 2500000,
    imgSrc: "/images/p2.png",
  },
  {
    name: "Lolito",
    tagline: "Luxury big sofa",
    price: 7000000,
    imgSrc: "/images/p3.png",
    type: "sale",
  },
  {
    name: "Respira",
    tagline: "Outdoor bar table and stool",
    price: 500000,
    imgSrc: "/images/p4.jpeg",
    type: "new",
  },
];

const ProductGrid = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleViewProduct = (product) => {
    navigate("/product", { state: { product } }); // Navigate to /product with product details
  };

  return (
    <section className="product-grid">
      <div className="products-grid">
        {/* Repeat the first 4 products 4 times */}
        {Array(4)
          .fill(products)
          .flat()
          .map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.imgSrc} alt={product.name} className="product-image" />
              {product.type === "sale" && <div className="badge sale">-30%</div>}
              {product.type === "new" && <div className="badge new">New</div>}
              <div className="product-overlay">
                <button onClick={() => handleViewProduct(product)}>View Product</button>
                <div className="actions">
                  <span>Share</span>
                  <span>Compare</span>
                  <span>Like</span>
                </div>
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <span className="price">Rp {product.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button className="page-button">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button">Next</button>
      </div>
    </section>
  );
};

export default ProductGrid;
