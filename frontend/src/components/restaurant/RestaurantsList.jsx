import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/restaurants')
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map(r => (
          <li key={r.id}>
            <Link to={`/restaurant/${r.id}`}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsList;
