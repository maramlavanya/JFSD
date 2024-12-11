import React from "react";
import "./Small.css"; // Import the CSS file for the "Small" page

const Small = () => {
  return (
    <div className="small-designs">
      <h1>Small Kitchen Designs</h1>
      <p>Explore our collection of space-saving, small kitchen designs.</p>
      {/* Add images or content specific to Small designs */}
      <div className="design-gallery">
        <div className="design-item">
          <img src="/path-to-your-small-design-image.jpg" alt="Small Kitchen" />
          <h3>Compact Kitchen Design</h3>
        </div>
        {/* Add more design items as needed */}
      </div>
    </div>
  );
};

export default Small;
