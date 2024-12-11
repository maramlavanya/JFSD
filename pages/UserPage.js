import React from 'react';
import './UserPage.css'; // Import the CSS file for styling

const UserPage = () => {
  return (
    <div className="user-dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">PROPERTY VALUE ENHANCEMENT</h1>
        <p className="dashboard-subtitle">Property and Real Estate Valuation Dashboard</p>
      </header>

      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <ul>
          <li><a href="/available-properties">Design Ideas</a></li>
          <li><a href="/remaining-properties">Discover your Style</a></li>
          <li><a href="/high-cost-properties">Luxury Models</a></li>
          <li><a href="/low-cost-properties">EMI Option</a></li>
          <li><a href="/middle-class-properties">About Us</a></li>
         
        </ul>
      </nav>
    </div>
  );
};

export default UserPage;
