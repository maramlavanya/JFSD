import React from 'react';
import PropTypes from 'prop-types'; // For type-checking props
import './Property.css'; // Import CSS for styling

const Property = ({ property }) => {
  const { title, price, date, location, status, image } = property;

  return (
    <div className="property-item">
      <img
        src={image}
        alt={title}
        className="property-image"
      />
      <div className="property-details">
        <h3>{title}</h3>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Expires:</strong> {date}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
      <span className={`property-status ${status.toLowerCase()}`}>
        {status}
      </span>
    </div>
  );
};

// Define PropTypes for type-checking
Property.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Property;
