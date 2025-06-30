import React from "react";
import { Link } from "react-router-dom";

function OrderFailed() {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">❌ Payment Failed</h2>
      <p>Unfortunately, your payment was not successful. Please try again.</p>
      <Link to="/cart" className="btn btn-warning mt-3">
        Go Back to Cart
      </Link>
    </div>
  );
}

export default OrderFailed;
