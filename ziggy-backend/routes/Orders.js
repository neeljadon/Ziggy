// const express = require("express");
// const router = express.Router();
// const db = require("../db");

// function simulatePayment() {
//   return Math.random() < 0.8 ? "Success" : "Failed";
// }

// router.post("/", async (req, res) => {
//   const { user_id, total_amount, items } = req.body;

//   if (!user_id || !total_amount || !Array.isArray(items) || items.length === 0) {
//     return res.status(400).json({ message: "Invalid order data" });
//   }

//   const status = simulatePayment();

//   try {
//     // Insert into orders table
//     const [orderResult] = await db.promise().query(
//       "INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, ?)",
//       [user_id, total_amount, status]
//     );

//     const order_id = orderResult.insertId;

//     // Insert each item into order_items table
//     for (const item of items) {
//       await db.promise().query(
//         "INSERT INTO order_items (order_id, name, price, quantity) VALUES (?, ?, ?, ?)",
//         [order_id, item.name, item.price, item.quantity]
//       );
//     }

//     if (status === "Success") {
//       res.status(200).json({ message: "Order placed successfully", status });
//     } else {
//       res.status(200).json({ message: "Payment failed. Please try again.", status });
//     }
//   } catch (error) {
//     console.error("Order error:", error);
//     res.status(500).json({ message: "Server error while placing order" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const db = require("../db");

// Simulate dummy payment
function simulatePayment() {
  return Math.random() < 0.8 ? "Success" : "Failed";
}

// POST /api/orders - Place a new order
router.post("/", async (req, res) => {
  const { user_id, total_amount, items } = req.body;

  if (!user_id || !total_amount || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  const status = simulatePayment();

  try {
    // Insert into orders table
    const [orderResult] = await db.promise().query(
      "INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, ?)",
      [user_id, total_amount, status]
    );

    const order_id = orderResult.insertId;

    // Insert each item into order_items table
    for (const item of items) {
      await db.promise().query(
        "INSERT INTO order_items (order_id, name, price, quantity) VALUES (?, ?, ?, ?)",
        [order_id, item.name, item.price, item.quantity]
      );
    }

    if (status === "Success") {
      res.status(200).json({ message: "Order placed successfully", status });
    } else {
      res.status(200).json({ message: "Payment failed. Please try again.", status });
    }
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Server error while placing order" });
  }
});

// GET /api/orders/user/:userId - Get recent orders for a user
router.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const [orders] = await db.promise().query(
      "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    const fullOrders = [];

    for (const order of orders) {
      const [items] = await db.promise().query(
        "SELECT name, price, quantity FROM order_items WHERE order_id = ?",
        [order.id]
      );

      fullOrders.push({
        id: order.id,
        user_id: order.user_id,
        total_amount: order.total_amount,
        status: order.status,
        created_at: order.created_at,
        items: items,
      });
    }

    res.status(200).json({ orders: fullOrders });
  } catch (err) {
    console.error("Error fetching user orders:", err);
    res.status(500).json({ message: "Server error fetching user orders" });
  }
});

module.exports = router;
