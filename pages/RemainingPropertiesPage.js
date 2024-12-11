import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation
import './RemainingPropertiesPage.css'; // Import CSS

const RemainingPropertiesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    pin: '',
    image: null, // New field to store uploaded image
  });
  const navigate = useNavigate(); // Hook for navigation

  // Check if all fields are filled (excluding image for now)
  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== '' && value !== null
  );

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) }); // Set image preview URL
    }
  };

  // Handle button click to navigate to the welcome page
  const handleGetStarted = () => {
    if (isFormComplete) {
      navigate('/welcome'); // Redirect to the welcome page
    }
  };

  return (
    <div className="remaining-properties-container">
      <div className="form-section">
        <h1>Interior Design Quiz</h1>
        <form>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="mobile">Mobile Number *</label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="pin">PIN *</label>
          <input
            type="password"
            id="pin"
            placeholder="Enter your PIN"
            value={formData.pin}
            onChange={handleChange}
          />

          {/* Image upload input */}
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          
          {formData.image && (
            <div className="image-preview">
              <img
                src={formData.image}
                alt="Image Preview"
                style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleGetStarted}
            disabled={!isFormComplete} // Button will be disabled if form is incomplete
          >
            Get Started
          </button>
        </form>
      </div>
      <div className="image-section">
        <img
          src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/our-work/a-luxurious-vacation-home-in-pune/bhs-pune-bedroom20956_11zon.jpg"
          alt="Interior Design"
        />
      </div>
    </div>
  );
};

export default RemainingPropertiesPage;
