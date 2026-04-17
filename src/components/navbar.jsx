import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { cartItems, searchItems, searchTerm, totalPrice } =
    useContext(CartContext);

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="brand">
        <img
          src="/logo.png"
          style={{ backgroundColor: "#2563eb" }}
          className="h-4 w-4 object-contain"
        />
        <span className="app-name">ShopSphere</span>
      </div>
      {location.pathname === "/shop" && (
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            onChange={(e) => searchItems(e.target.value)}
            placeholder="search any product"
          />
        </div>
      )}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cart-link">
          {/* Show price if cart isn't empty */}
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
    </nav>
  );
}

export default Navbar;
