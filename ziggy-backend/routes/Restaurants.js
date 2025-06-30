const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/search', (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  const searchTerm = `%${query}%`;

  db.query(
    'SELECT * FROM restaurants WHERE name LIKE ?',
    [searchTerm],
    (err, results) => {
      if (err) {
        console.error('DB Error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }

      res.json(results);
    }
  );
});


router.get('/:id', (req, res) => {
  const restaurantId = req.params.id;

  db.query('SELECT * FROM restaurants WHERE id = ?', [restaurantId], (err, restaurantResults) => {
    if (err) {
      console.error('DB Error:', err);
      return res.status(500).json({ error: err });
    }

    if (restaurantResults.length === 0) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    db.query(
      'SELECT id, name, price FROM menu_items WHERE restaurant_id = ?',
      [restaurantId],
      (err, menuResults) => {
        if (err) {
          return res.status(500).json({ error: err });
        }

        res.json({
          restaurant: restaurantResults[0],
          menu: menuResults,
        });
      }
    );
  });
});

module.exports = router;
