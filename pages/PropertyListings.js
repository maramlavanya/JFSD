// src/pages/PropertyListings.js
import React, { useState, useEffect } from 'react';
import './PropertyListings.css';

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Sample properties data (this should be fetched from your backend)
    const fetchedProperties = [
      { id: 1, name: 'Luxury Villa', price: '$1,000,000', location: 'Los Angeles, CA' },
      { id: 2, name: 'Cozy Apartment', price: '$350,000', location: 'New York, NY' },
      { id: 3, name: 'Modern Office Space', price: '$850,000', location: 'San Francisco, CA' },
    ];

    setProperties(fetchedProperties);
  }, []);

  return (
    <div className="property-listings-container">
      <h2>Property Listings</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <h3>{property.name}</h3>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
