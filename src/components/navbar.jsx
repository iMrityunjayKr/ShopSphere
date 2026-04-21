import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const { cartItems, searchItems, totalPrice } = useContext(CartContext);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <span className="app-name">ShopSphere</span>
      </div>

      {location.pathname === "/shop" && (
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            onChange={(e) => searchItems(e.target.value)}
            placeholder="Search any product..."
          />
        </div>
      )}

      <div className={`nav-links ${isMobile ? "nav-active" : ""}`}>
        <Link to="/" onClick={() => setIsMobile(false)}>
          Home
        </Link>
        <Link to="/shop" onClick={() => setIsMobile(false)}>
          Shop
        </Link>
        <Link
          to="/cart"
          className="cart-link"
          onClick={() => setIsMobile(false)}
        >
          {cartItems.length > 0 && (
            <span className="nav-price">${totalPrice.toFixed(2)}</span>
          )}
          <div className="cart-icon-wrapper">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </div>
        </Link>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <HiX /> : <HiMenuAlt3 />}
      </div>
    </nav>
  );
}

export default Navbar;
