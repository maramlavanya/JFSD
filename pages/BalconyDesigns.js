import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Balcony Design Ideas</h1>
      <p>
      Let Beautiful Homes help you with stylish, modern and trendy balcony design ideas. Our experienced home decorators can create a custom balcony that reflects your personal style and creates a beautiful outdoor space in your home. Explore our latest designs now.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/contemporary-balcony-with-cozy-seating-and-planters/balcony-design-outside.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Contemporary balcony with cozy seating and planters</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-with-wooden-pergola-and-woven-seating/modern-balcony-design.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>Modern balcony with wooden pergola and woven seating</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-balcony-with-exposed-grey-textured-wall-and-greenery/balcony-wall-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern balcony with exposed grey textured wall and greenery</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/large-balcony-with-swing-and-black-coffee-table/balcony-interior-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Large balcony with swing and black coffee table</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/bohemian-balcony-with-cane-coffee-table-and-colourful-furniture/balcony-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Bohemian balcony with cane coffee table and colourful furniture</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-design-with-hexagon-patterned-tiles-and-wall-planters/balcony-design-with-wall-planters.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Balcony design with hexagon patterned tiles and wall planters</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/modern-contemporary-balcony-with-dark-wooden-wall-paneling-and-green-wall-planters/balcony-wall-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Modern contemporary balcony with dark wooden wall paneling and green wall planters</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/glass-balcony-with-l-sofa-seating-and-wooden-ceiling/glass-balcony-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Glass Balcony with L-Sofa Seating and Wooden Ceiling</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/lush-green-balcony-with-beautiful-green-wall-and-swing-chair/balcony-garden-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Lush Green Balcony with Beautiful Green Wall and Swing Chair</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
