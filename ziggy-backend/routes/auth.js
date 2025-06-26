const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing Details" });
  }

  try {
    // Check if user already exists
    const checkUser = 'SELECT * FROM users WHERE username = ?';
    db.query(checkUser, [username], async (err, results) => {
      if (err) {
        console.error('Error checking user:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      if (results.length > 0) {
        return res.status(409).json({ success: false, message: 'Username already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertUser = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(insertUser, [username, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          return res.status(500).json({ success: false, message: 'Server error' });
        }

        res.status(201).json({ success: true, message: 'User registered successfully' });
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unexpected error' });
  }
});

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err) {
      console.error('Error retrieving user:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // ✅ Include user id in response
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username
      }
    });
  });
});


module.exports = router;
