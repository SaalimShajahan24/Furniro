import React from "react";
import "./styles/OurProducts.css";

const products = [
  {
    name: "Syltherine",
    tagline: "Stylish cafe chair",
    price: 2500000,
    imgSrc: "/images/p1.png",
    type: "sale",
    // discountedPrice: 2000000,
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
    // discountedPrice: 5000000,
  },
  {
    name: "Respira",
    tagline: "Outdoor bar table and stool",
    price: 500000,
    imgSrc: "/images/p4.jpeg",
    type: "new",
  },
  {
    name: "Grifo",
    tagline: "Night lamp",
    price: 1500000,
    imgSrc: "/images/p5.png",
  },
  {
    name: "Muggo",
    tagline: "Small mug",
    price: 150000,
    imgSrc: "/images/p6.png",
    type: "new",
  },
  {
    name: "Pingky",
    tagline: "Cute bed set",
    price: 7000000,
    imgSrc: "/images/p7.jpeg",
    type: "sale",
    // discountedPrice: 5000000,
  },
  {
    name: "Potty",
    tagline: "Minimalist flower pot",
    price: 500000,
    imgSrc: "/images/p8.jpeg",
    type: "new",
  },
];

const OurProducts = () => {
    return (
      <section className="our-products">
        <h2 className="products-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card">
  <img src={product.imgSrc} alt={product.name} className="product-image" />
  {product.type === "sale" && <div className="badge sale">-{product.discount}%</div>}
  {product.type === "new" && <div className="badge new">New</div>}
  <div className="product-overlay">
    <button>Add to Cart</button>
    <div className="actions">
      <span>Share</span>
      <span>Compare</span>
      <span>Like</span>
    </div>
  </div>
  <div className="product-details">
    <h3 className="product-name">{product.name}</h3>
    <p className="product-tagline">{product.tagline}</p>
    <div className="product-prices">
      {product.discountedPrice ? (
        <>
          <span className="original-price">Rp {product.price.toLocaleString()}</span>
          <span className="discounted-price">Rp {product.discountedPrice.toLocaleString()}</span>
        </>
      ) : (
        <span className="price">Rp {product.price.toLocaleString()}</span>
      )}

                </div>
                {product.type === "new" && <span className="badge new">New</span>}
                {product.type === "sale" && <span className="badge sale">-50%</span>}
              </div>
            </div>
          ))}
        </div>
        <center><button className="show-more">Show More</button></center>
      </section>
    );
  };
  

export default OurProducts;
