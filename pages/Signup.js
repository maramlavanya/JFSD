// src/pages/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Signup.css'; // Import the CSS file

function Signup() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // State for handling input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Added state for phone number
  const [error, setError] = useState('');  // State to handle errors (like password mismatch)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Simple validation for password match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Validate phone number length (must be exactly 10 digits)
    if (phoneNumber.length !== 10) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    // You can also add a regex to validate the phone number format, if desired
    const phoneNumberRegex = /^[0-9]{10}$/; // Ensures only 10 digits are entered
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError('Please enter a valid phone number with 10 digits.');
      return;
    }

    // Here, you would normally handle signup logic (API call, etc.)
    // After successful signup, navigate to the login page
    setError('');
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              maxLength="10" // Restrict to 10 characters
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6" // Minimum length of 6 characters
              maxLength="20" // Maximum length of 20 characters
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <button type="submit">Signup</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login" className="nav-link">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
