import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import axios from "axios";
import "./DummyPayment.css"; // 👈 Create this file for styling

function DummyPayment() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = async () => {
    const userId = localStorage.getItem("userId") || JSON.parse(localStorage.getItem("user"))?.id;

    console.log("userId from localStorage:", userId);

    if (!userId) {
      alert("User not logged in. Please log in first.");
      return;
    }

    const formattedItems = cartItems.map((item) => ({
      name: item.name,
      price: parseFloat(item.price),
      quantity: item.quantity || 1,
    }));

    const totalAmount = formattedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const orderData = {
      user_id: parseInt(userId),
      total_amount: totalAmount,
      items: formattedItems,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/orders", orderData);

      if (response.data.status === "Success") {
        clearCart();
        navigate("/order-success");
      } else {
        navigate("/order-failed");
      }
    } catch (err) {
      console.error("Payment Error:", err.response?.data || err.message);
      alert("Payment failed due to server error.");
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className="dummy-payment-container">
      <div className="payment-card">
        <h2 className="text-center mb-4">🧾 Order Summary</h2>

        <ul className="item-list">
          {cartItems.map((item, idx) => (
            <li key={idx} className="item-row">
              <span>{item.name}</span>
              <span>
                ₹{parseFloat(item.price)} × {item.quantity || 1}
              </span>
            </li>
          ))}
        </ul>

        <hr />

        <div className="total-amount">
          <strong>Total:</strong> ₹{total.toFixed(2)}
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          💳 Pay Now
        </button>
      </div>
    </div>
  );
}

export default DummyPayment;
