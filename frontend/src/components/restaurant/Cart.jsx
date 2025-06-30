import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  };

  const handleCheckout = () => {
    setLoading(true);

    // Simulate a delay before navigating
    setTimeout(() => {
      setLoading(false);
      navigate("/payment");
    }, 800);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-heading">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img src="/empty-cart.png" alt="Empty Cart" />
            <p>Your cart is empty. Go add something delicious!</p>
          </div>
        ) : (
          <div className="cart-content">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h5>{item.name}</h5>
                  <p>
                    ₹{item.price} × {item.quantity || 1}
                  </p>
                </div>

                <div className="item-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h4>Total Amount: ₹{getTotal()}</h4>
              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Redirecting..." : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
