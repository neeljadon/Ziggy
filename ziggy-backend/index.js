const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/Restaurants');
const orderRoutes = require('./routes/Orders')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => {
  res.send('🚀 Ziggy Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`🌐 Server started on http://localhost:${PORT}`);
});
