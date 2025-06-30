import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Header.css";
import { CartContext } from "./components/Context/CartContext";

const Header = ({ loggedInUser, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems } = useContext(CartContext);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(() => {
    return localStorage.getItem("userLocation") || "Choose Location";
  });

  const userDropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }

      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setShowCartDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleLocationChange = (loc) => {
    setSelectedLocation(loc);
    localStorage.setItem("userLocation", loc);
    const closeBtn = document.querySelector(".btn-close");
    if (closeBtn) closeBtn.click();
  };

  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo */}
          <Link className="navbar-brand me-2" to="/">
            <img src="Ziggy.png" alt="Ziggy" className="header-logo" />
          </Link>

          {/* Location selector */}
          <span
            className="nav-link text-dark fw-medium cursor-pointer me-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#locationOffcanvas"
            style={{ cursor: "pointer" }}
          >
            📍 {selectedLocation}
          </span>

          {/* Search Bar */}
          <div className="d-none d-lg-flex flex-grow-1 mx-4">
            <form className="w-100" onSubmit={handleSearch}>
              <div className="input-group search-container">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search for restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn search-btn" type="submit">
                  <FaSearch className="me-1" />
                </button>
              </div>
            </form>
          </div>

          <div className="d-flex align-items-center">
            <div className="nav-item mx-2 d-none d-lg-block">
              <Link to="/offers" className="nav-link">
                Offers
              </Link>
            </div>

            <div className="nav-item mx-2 d-none d-lg-block">
              <Link to="/help" className="nav-link">
                Help
              </Link>
            </div>

            {/* User Dropdown */}
            <div className="nav-item dropdown mx-2" ref={userDropdownRef}>
              <button
                className="btn dropdown-toggle user-dropdown"
                onClick={() => {
                  setShowUserDropdown(!showUserDropdown);
                  setShowCartDropdown(false);
                }}
              >
                <FaUser className="me-1" />
                <span>{loggedInUser ? loggedInUser : "Sign In"}</span>
                <FaChevronDown className="ms-1" size={12} />
              </button>

              {showUserDropdown && (
                <div className="dropdown-menu show dropdown-menu-end">
                  {loggedInUser ? (
                    <>
                      <Link className="dropdown-item" to="/recent-orders">
                        My Orders
                      </Link>
                      {/* <Link className="dropdown-item" to="/account">
                        Account
                      </Link> */}
                      <div className="dropdown-divider"></div>
                      <button
                        className="dropdown-item text-danger"
                        onClick={onLogout}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                      <Link className="dropdown-item" to="/signup">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Cart Dropdown */}
            <div className="nav-item dropdown mx-2" ref={cartDropdownRef}>
              <button
                className="btn dropdown-toggle cart-dropdown"
                onClick={() => {
                  setShowCartDropdown(!showCartDropdown);
                  setShowUserDropdown(false);
                }}
              >
                <FaShoppingCart className="me-1" />
                <span>Cart</span>
                <span className="badge bg-orange">{cartItems.length}</span>
              </button>
              {showCartDropdown && (
                <div
                  className="dropdown-menu show dropdown-menu-end cart-dropdown-menu p-3"
                  style={{ minWidth: "250px" }}
                >
                  {cartItems.length === 0 ? (
                    <div className="text-center">
                      <p>Your cart is empty</p>
                      <Link to="/" className="btn btn-orange mt-2">
                        Start ordering
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <ul className="list-group mb-2">
                        {cartItems.map((item, index) => (
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={index}
                          >
                            {item.name}
                            <span className="badge bg-secondary">
                              ₹{item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/cart" className="btn btn-sm btn-success w-100">
                        Go to Cart
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Location Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="locationOffcanvas"
        aria-labelledby="locationOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="locationOffcanvasLabel">
            Select Your Location
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          {["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad"].map(
            (loc) => (
              <button
                key={loc}
                className="btn btn-outline-dark w-100 mb-2"
                onClick={() => handleLocationChange(loc)}
              >
                {loc}
              </button>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
