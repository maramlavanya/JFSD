import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css'; // Import the CSS for styling

const ProfilePage = () => {
  // Initial profile data (can be fetched from an API or other source)
  const initialProfile = {
    fullName: 'Garimella Sindhu',
    email: 'sindhugarimella33@gmail.com',
    phoneNumber: '9491720658',
    city: 'eluru, rk nagar',
    state: 'Andhra Pradesh',
    zipCode: '534460',
    country: 'India',
    profilePicture: 'data:image/jpeg;base64,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', // Default image path
  };

  const [profile, setProfile] = useState(initialProfile);
  const [isDirty, setIsDirty] = useState(false); // Tracks if there are unsaved changes

  // Handle input changes and detect changes to fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => {
      const updatedProfile = { ...prevProfile, [name]: value };
      // Check if the updated profile differs from the initial one
      setIsDirty(
        JSON.stringify(updatedProfile) !== JSON.stringify(initialProfile)
      );
      return updatedProfile;
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: imageUrl, // Update the profile picture with the uploaded image
      }));
      setIsDirty(true); // Mark the profile as dirty because the image has changed
    }
  };

  const handleSaveChanges = () => {
    // Save the changes (you can integrate an API call here)
    alert('Profile changes saved!');
    // Update initialProfile to reflect the new changes
    setIsDirty(false);
  };

  return (
    <div className="profile-page-container">
      <div className="sidebar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/favorites">Favourites</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/profile" className="active">Profile</Link></li>
          <li><Link to="/security">Security</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h2>Edit Profile</h2>
        <div className="profile-form">
          <div className="profile-image">
            <img
              src={profile.profilePicture} // Dynamic profile picture
              alt="Profile"
              className="profile-img"
            />
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="profilePictureInput"
                style={{ display: 'none' }}
              />
              <label htmlFor="profilePictureInput">
                <button>Edit Picture</button>
              </label>
            </div>
          </div>
          <div className="form-fields">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleInputChange}
            />
            <label>State</label>
            <input
              type="text"
              name="state"
              value={profile.state}
              onChange={handleInputChange}
            />
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={profile.zipCode}
              onChange={handleInputChange}
            />
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="profile-actions">
            <Link to="/">Back to Home</Link>
            <button
              onClick={handleSaveChanges}
              disabled={!isDirty} // Disable the button if no changes were made
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
