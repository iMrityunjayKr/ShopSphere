import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ordersummary.css";

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  const { items, totalPrice, directBuyItem } = location.state || {};

  const finalItems = directBuyItem ? [directBuyItem] : items;
  const finalTotal = directBuyItem ? directBuyItem.price : totalPrice;

  if (!location.state) {
    return <div className="error">Please add items to your cart first.</div>;
  }

  return (
    <div className="order-summary-container">
      <h2>Review Your Order</h2>
      <div className="invoice-card">
        {finalItems.map((item) => (
          <div key={item.id} className="invoice-row">
            <span>{item.title}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="separator" />
        <div className="invoice-total">
          <strong>Grand Total:</strong>
          <strong>${(finalTotal || 0).toFixed(2)}</strong>
        </div>
      </div>

      <button
        className="confirm-btn"
        onClick={() => alert("Success! Order placed.")}
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;
