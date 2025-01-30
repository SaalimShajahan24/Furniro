import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BrowseTheRange from "./components/BrowseTheRange";
import OurProducts from "./components/OurProducts";
import RoomInspiration from "./components/RoomInspiration";
import FuniroFurniture from "./components/FuniroFurniture";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import ProductComparison from "./components/ProductComparison";
import Cart from "./components/Cart"; 
import Checkout from "./components/Checkout";
import Contact from "./components/Contact"; 
import Blog from "./components/Blog"; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
    console.log("Updated cartItems:", cartItems);
    setIsCartVisible(true);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header
        onCartClick={() => setIsCartVisible((prev) => !prev)} 
        cartItemCount={cartItems.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BrowseTheRange />
              <OurProducts />
              <RoomInspiration />
              <FuniroFurniture />
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/product"
          element={<ProductDetail onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/comparison"
          element={<ProductComparison comparisonItems={cartItems} />}
        />
        {/* Add Cart Route */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} />}
        />
        {/* Add Checkout Route */}
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} />}
        />
        {/* Add Contact Route */}
        <Route path="/contact" element={<Contact />} />
        {/* Add Blog Route */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {isCartVisible && (
        <div className="cart-overlay">
          <ShoppingCart
            cartItems={cartItems}
            onClose={() => setIsCartVisible(false)}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      )}
    </Router>
  );
};

export default App;
