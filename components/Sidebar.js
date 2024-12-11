import React from 'react';
import './Sidebar.css'; // Optional CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/profile">My Profile</a></li>
        <li><a href="/my-properties">My Properties List</a></li>
        <li><a href="/add-property">Add New Property</a></li>
        <li><a href="/favorites">Favorites</a></li>
        <li><a href="/saved-searches">Saved Searches</a></li>
        <li><a href="/logout">Log Out</a></li>
      </ul>
      <div className="current-package">
        <h4>Your Current Package</h4>
        <p>Free Membership</p>
        <ul>
          <li>Listings Included: unlimited listings</li>
          <li>Listings Remaining: unlimited</li>
          <li>Featured Included: 0</li>
          <li>Featured Remaining: 0</li>
          <li>Ends On: -</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
