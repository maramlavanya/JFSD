import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Home Interior Design Ideas</h1>
      <p>
        Find the perfect home interior design ideas to match your style. Get inspired with our exclusive collection of beautiful, customized designs and trends.
        Our team of interior design experts will help you create a space that reflects your personality, taste, and lifestyle.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <Link to="/modular-kitchen-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/white-and-brown-l-shaped-modular-kitchen-with-acrylic-cabinets-and-terrazzo-backsplash/modern-kitchen-cabinets.jpg.transform/bh-gallery-listing/image.webp"
              alt="Kitchen Designs"
            />
            <h3>Kitchen Designs</h3>
          </Link>
        </div>
        {/* Second Design */}
        <div className="design-item">
          <Link to="/living-room-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/classical-vibrant-living-room-with-wall-niches-and-chandelier/living-room-modern-wall-design.jpg.transform/bh-gallery-listing/image.webp"
              alt="Living Rooms"
            />
            <h3>Living Rooms</h3>
          </Link>
        </div>
        {/* Third Design */}
        <div className="design-item">
          <Link to="/dining-room-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/contemporary-dining-room-with-bevelled-mirror-panel/dining-room-interior-design.jpg.transform/bh-gallery-listing/image.webp"
              alt="Dining Rooms"
            />
            <h3>Dining Rooms</h3>
          </Link>
        </div>
        {/* Fourth Design */}
        <div className="design-item">
          <Link to="/bedroom-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/eclectic-kids-bedroom-with-fluted-wall-panel/childrens-bedroom-interior-design.jpg.transform/bh-gallery-listing/image.webp"
              alt="Bedrooms"
            />
            <h3>Bedrooms</h3>
          </Link>
        </div>
        {/* Fifth Design */}
        <div className="design-item">
          <Link to="/bathroom-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/eclectic-bathroom-with-green-subway-tiles-and-grey-terrazzo-flooring/dark-green-bathroom-tiles-with-grey-terrazzo-tile-bathroom.jpg.transform/bh-gallery-listing/image.webp"
              alt="Bathrooms"
            />
            <h3>Bathrooms</h3>
          </Link>
        </div>
        {/* Sixth Design */}
        <div className="design-item">
          <Link to="/study-room-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/study-room/countryside-study-room-in-an-arched-niche-with-built-in-shelves/study-room-shelves.jpg.transform/bh-gallery-listing/image.webp"
              alt="Study Rooms"
            />
            <h3>Study Rooms</h3>
          </Link>
        </div>
        {/* Seventh Design */}
        <div className="design-item">
          <Link to="/balcony-designs">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/contemporary-balcony-with-cozy-seating-and-planters/balcony-design-outside.jpg.transform/bh-gallery-listing/image.webp"
              alt="Balconies"
            />
            <h3>Balcony</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
