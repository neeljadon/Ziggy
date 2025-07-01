# 🍽️ Ziggy – Food Delivery Web App

**Ziggy** is a full-stack food delivery web application inspired by Swiggy. It allows users to browse restaurants, explore menus, add items to a cart, and simulate a checkout experience. Built using the **MERN stack** (React, Node.js, Express, MySQL), Ziggy delivers a smooth and responsive food ordering interface.

## 🚀 Features

- 🔍 Search Restaurants by name
- 📍 Location selector to browse restaurants near the user
- 🛒 Add to Cart functionality with cart persistence
- 📄 Order Summary & Checkout simulation
- 👤 Login / Signup system (with basic auth)
- 📦 Recent Orders tracking
- 💬 Help & Support and Offers pages
- 📱 Responsive design for mobile & desktop

## 🛠️ Tech Stack

| Frontend  | Backend       | Database |
|-----------|---------------|----------|
| React     | Node.js       | MySQL    |
| React Router | Express.js |           |
| Bootstrap | Axios         |           |

## 📂 Project Structure

```
Ziggy/
├── client/          # React frontend
│   ├── components/
│   ├── App.js
│   └── ...
├── server/          # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── db.js
│   └── ...
├── README.md
└── package.json
```

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ziggy.git
cd ziggy
```

### 2. Setup Backend
```bash
cd server
npm install
node index.js
```

> Ensure MySQL is running and configured in `db.js`.

### 3. Setup Frontend
```bash
cd ../client
npm install
npm start
```

## ✍️ Author

- **Neel Shankar** – [LinkedIn](https://www.linkedin.com/neelshankar)

