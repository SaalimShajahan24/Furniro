import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProductComparison.css";
import FeaturesRow from "./FeaturesRow"; // Import FeaturesRow component
import Footer from "./Footer";

const ProductComparison = ({ comparisonItems }) => {
  return (
    <div className="product-comparison">
      {/* Header Section */}
      <header
        style={{
          backgroundImage: `url("/images/sh1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "316px",
        }}
      >
        <div className="comparison-header">
          <h1>Product Comparison</h1>
          <h4>Home > comparison</h4>
        </div>
      </header>

      {/* Main Content */}
      <div className="comparison-content">
        {/* Left Section */}
        <div className="comparison-left">
          <h3>Go to Product page for more Products</h3>
          <Link to="/shop" className="view-more-link">
            View More
          </Link>
        </div>

        {/* Products Section */}
        <div className="comparison-products">
          {comparisonItems.map((item, index) => (
            <div key={index} className="comparison-product">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="product-image"
                style={{
                  width: "280px",
                  height: "177px",
                  objectFit: "cover",
                }}
              />
              <h4 className="product-name">{item.name}</h4>
              <p className="product-price">Rs. {item.price.toLocaleString()}</p>
              <div className="product-rating">
                ⭐⭐⭐⭐ {item.rating || "4.7"} ({item.reviews || "204 Reviews"})
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="comparison-right">
          <h3>Add A Product</h3>
          <button className="add-product-button">Choose a Product</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>General</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales Package</td>
              <td>1 sectional sofa</td>
              <td>1 Three Seater, 2 Single Seater</td>
            </tr>
            <tr>
              <td>Model Number</td>
              <td>TCBLURBGL85RHS</td>
              <td>DTBLURGLES58</td>
            </tr>
            <tr>
              <td>Secondary Material</td>
              <td>Solid Wood</td>
              <td>Solid Wood</td>
            </tr>
            <tr>
              <td>Configuration</td>
              <td>L-shaped</td>
              <td>L-shaped</td>
            </tr>
            <tr>
              <td>Upholstery Material</td>
              <td>Fabric + Cotton</td>
              <td>Fabric + Cotton</td>
            </tr>
            <tr>
              <td>Upholstery Color</td>
              <td>Bright Gray & Lion</td>
              <td>Bright Gray & Lion</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Product</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Filling Material</td>
              <td>Foam</td>
              <td>Mattress</td>
            </tr>
            <tr>
              <td>Finish Type</td>
              <td>Bright Gray & Lion</td>
              <td>Bright Gray & Lion</td>
            </tr>
            <tr>
              <td>Adjustable Headrest</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Maximum Load Capacity</td>
              <td>280 KG</td>
              <td>300 KG</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Dimensions</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Width</td>
              <td>268.32 cm</td>
              <td>268.32 cm</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>76 cm</td>
              <td>76 cm</td>
            </tr>
            <tr>
              <td>Depth</td>
              <td>187.76 cm</td>
              <td>187.76 cm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>45 KG</td>
              <td>65 KG</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Warranty</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Warranty Summary</td>
              <td>1 Year Manufacturing Warranty</td>
              <td>12 Year Manufacturing Warranty</td>
            </tr>
            <tr>
              <td>Warranty Service Type</td>
              <td>On-Site Service</td>
              <td>On-Site Service</td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
   
    {/*Features Section*/}
    <FeaturesRow/>
    {/*Footer Section*/}
    <Footer/>
    </div>
  );
};

export default ProductComparison;
