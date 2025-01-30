import React from "react";
import "./styles/RelatedProducts.css"; // Ensure the CSS file path is correct
import Footer from "./Footer";

const relatedProducts = [
  {
    name: "Syltherine",
    tagline: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    imgSrc: "/images/p1.png",
    badge: "30%",
  },
  {
    name: "Leviosa",
    tagline: "Stylish cafe chair",
    price: "Rp 2.500.000",
    imgSrc: "/images/p2.png",
  },
  {
    name: "Lolito",
    tagline: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    imgSrc: "/images/p3.png",
    badge: "50%",
  },
  {
    name: "Respira",
    tagline: "Outdoor bar table and stool",
    price: "Rp 500.000",
    imgSrc: "/images/p4.jpeg",
    badge: "New",
  },
];

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="related-products-grid">
        {relatedProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img src={product.imgSrc} alt={product.name} />
              {product.badge && (
                <div className={`badge ${product.badge === "New" ? "new" : ""}`}>
                  {product.badge}
                </div>
              )}
            </div>
            <div className="product-card-content">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              <div className="product-pricing">
                <span className="product-price">{product.price}</span>
                {product.oldPrice && (
                  <span className="product-old-price">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more">Show More</button>
       {/* Border added after Show More button */}
       <div className="after-show-more-border"></div>
      <Footer /> {/* Include the Footer component here */}
    </div>
    
  );
};

export default RelatedProducts;
