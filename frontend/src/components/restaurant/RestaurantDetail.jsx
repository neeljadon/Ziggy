import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RestaurantDetail.css';
import { useCart } from '../Context/CartContext';

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => {
        setRestaurant(res.data.restaurant);
        setMenu(res.data.menu);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item?.quantity || 0;
  };

  const handleAdd = (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      updateQuantity(item.id, existing.quantity + 1);
    } else {
      addToCart(item);
    }
  };

  const handleRemove = (itemId) => {
    const existing = cartItems.find((i) => i.id === itemId);
    if (existing.quantity === 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, existing.quantity - 1);
    }
  };

  if (!restaurant) return <div className="loading">Loading...</div>;

  return (
    <div className="restaurant-detail-container">
      <div className="restaurant-header">
        <h2 className="restaurant-name">{restaurant.name}</h2>
        <p className="restaurant-description">{restaurant.description}</p>
        <p className="restaurant-delivery">
          ⏱️ Delivery Time: <strong>{restaurant.delivery_time}</strong>
        </p>
      </div>

      <div className="menu-section">
        <h3 className="menu-title">🍽️ Menu</h3>
        <div className="menu-items">
          {menu.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div className="menu-card" key={item.id}>
                <div className="menu-info">
                  <p className="menu-name">{item.name}</p>
                  <p className="menu-price">₹{item.price}</p>
                </div>
                <div className="menu-actions">
                  {quantity > 0 ? (
                    <div className="quantity-controls">
                      <button onClick={() => handleRemove(item.id)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => handleAdd(item)}>+</button>
                    </div>
                  ) : (
                    <button className="add-button" onClick={() => addToCart(item)}>
                      Add ➕
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetail;
