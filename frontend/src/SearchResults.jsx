// SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5000/api/restaurants/search?q=${query}`)
        .then((res) => {
          const data = res.data;
          if (data.length === 1) {
            // ✅ Redirect directly to the single matched restaurant
            navigate(`/restaurant/${data[0].id}`);
          } else {
            setResults(data);
            setError(data.length === 0 ? "No matching restaurants found." : "");
          }
        })
        .catch((err) => {
          setResults([]);
          setError("Error fetching restaurants");
        });
    }
  }, [query, navigate]);

  return (
    <div className="container mt-4">
      <h2>Search Results for: <span className="text-primary">{query}</span></h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="row mt-3">
        {results.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.description}</p>
                <p className="card-text"><strong>Delivery Time:</strong> {restaurant.delivery_time}</p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
