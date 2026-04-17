import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../styles/cart.css";

function Cart() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Bag ({cartItems.length})</h2>
        {cartItems.length > 0 && (
          <button className="clear-btn" onClick={clearCart}>
            Clear All
          </button>
        )}
      </div>

      <div className="cart-layout">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ProductCard type="cart" product={item} key={item.id} />
          ))
        ) : (
          <div className="empty-state">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="shop-link">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total-box">
            <span
              style={{
                margin: "30px 30",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Total Amount:
            </span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="checkout-btn"
            onClick={() =>
              navigate("/order-summary", {
                state: {
                  items: cartItems,
                  totalPrice: totalPrice,
                },
              })
            }
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
