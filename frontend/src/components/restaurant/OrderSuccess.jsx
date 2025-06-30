import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h2 className="success-title">Payment Successful!</h2>
        <p className="success-message">
          Your order has been placed successfully. <br />
          You can track it under <strong>Recent Orders</strong>.
        </p>
        <button
          className="success-button"
          onClick={() => navigate('/recent-orders')}
        >
          View Recent Orders
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
