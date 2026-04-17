import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/productcard.css";

function ProductCard({ product, type }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/order-summary", { state: { directBuyItem: product } });
  };

  return (
      <div className={`product-card ${type === "cart" ? "cart-row" : ""}`}>
  <div className="product-image">
    <img src={product.image} alt={product.title} />
  </div>

  <div className="product-info">
    <h3>{product.title}</h3>
    <p className="price">${product.price}</p>
  </div>


  <div className="card-buttons">
    {type === "cart" ? (
      <button className="danger-btn" onClick={() => removeFromCart(product.id)}>
        Remove
      </button>
      
    )  : (
            <>
              <button className="buy-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button className="add-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
   
  );
}

export default ProductCard;
