import React, { useState } from "react";
import "./styles/ProductTabs.css";
import RelatedProducts from "./RelatedProducts";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="product-tabs">
      {/* Tabs Navigation */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Description" ? "active" : ""}`}
          onClick={() => handleTabClick("Description")}
        >
          Description
        </button>
        <button
          className={`tab ${
            activeTab === "Additional Information" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Additional Information")}
        >
          Additional Information
        </button>
        <button
          className={`tab ${activeTab === "Reviews" ? "active" : ""}`}
          onClick={() => handleTabClick("Reviews")}
        >
          Reviews [5]
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "Description" && (
        <div className="tab-content">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio that boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="tab-images">
            <img
              src="/images/Group 109.png"
              alt="Sofa Design 1"
              className="tab-image"
            />
          </div>
        </div>
      )}

      {activeTab === "Additional Information" && (
        <div className="tab-content">
          <p>
            This product is available in multiple sizes and colors. Please
            refer to the product specifications for detailed information on
            dimensions and features.
          </p>
        </div>
      )}

      {activeTab === "Reviews" && (
        <div className="tab-content">
          <p>Customer reviews coming soon! Stay tuned.</p>
        </div>
      )}

      {/* Related Products Section */}
      <RelatedProducts />
    </div>
  );
};

export default ProductTabs;
