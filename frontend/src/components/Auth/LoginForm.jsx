import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      const user = response.data.user;


      localStorage.setItem('user', JSON.stringify(user));   
      localStorage.setItem('userId', user.id);              


      onLoginSuccess(user.username, user.id);

      navigate('/');
    } catch (error) {
      const msg = error.response?.data?.message || 'Login failed. Please try again.';
      setErrorMessage(msg);
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-3">
          {/* Ziggy Branding */}
          <img
            src="Ziggy.png"
            alt="Ziggy Logo"
            style={{ width: '80px', height: 'auto', marginBottom: '10px' }}
          />
          <h4 className="fw-bold">Login to Ziggy</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>

          <div className="mt-3 text-center">
            <small>
              New to Ziggy? <Link to="/signup">Create an account</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
