// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Property Management System</h1>
      <p class="p">Choose your path:</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
