// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function RecentOrders() {
//   const [orders, setOrders] = useState([]);
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/orders/user/${userId}`);
//         setOrders(response.data.orders);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

//   return (
//     <div className="container mt-5">
//       <h3>Your Recent Orders</h3>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order.id} className="card mb-3 p-3 shadow-sm">
//             <p><strong>Order ID:</strong> {order.id}</p>
//             <p><strong>Status:</strong> {order.status}</p>
//             <p><strong>Total:</strong> ₹{order.total_amount}</p>
//             <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>

//             <ul>
//               {order.items.map((item, index) => (
//                 <li key={index}>
//                   {item.name} - ₹{item.price} × {item.quantity}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default RecentOrders;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import "./RecentOrder.css"; // 💡 Custom styles here

function RecentOrders() {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/orders/user/${userId}`
        );
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="recent-orders-container">
      <h3 className="section-title">Your Recent Orders</h3>

      {orders.length === 0 ? (
        <p className="no-orders-msg">You haven't placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div>
                <h5>Order #{order.id}</h5>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status === "Success" ? (
                    <>
                      <FaCheckCircle className="status-icon" /> Delivered
                    </>
                  ) : (
                    <>
                      <FaClock className="status-icon" /> {order.status}
                    </>
                  )}
                </span>
              </div>
              <div className="order-meta">
                <span>Total: ₹{Number(order.total_amount).toFixed(2)}</span>

                <span className="order-date">
                  {new Date(order.created_at).toLocaleString()}
                </span>
              </div>
            </div>

            <ul className="order-items">
              {order.items.map((item, index) => (
                <li key={index}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-detail">
                    ₹{item.price} × {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentOrders;
