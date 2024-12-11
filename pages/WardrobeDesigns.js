import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Wardrobe Design Ideas</h1>
      <p>
      Looking for ways to elevate your storage game? Venture into the selection of wardrobe design ideas by Beautiful Homes and get inspired to transform your closet from a mere storage space into a chic and functional fashion hub.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/modern-hinged-wardrobe-in-red-with-a-wooden-study-table/modern-wardrobe-with-study-table-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Modern hinged wardrobe in red with a wooden study table</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/hinged-wardrobe-with-leatherette-finish-shutters-in-grey-and-cream-colour/modern-wardrobe-design.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>Hinged wardrobe with leatherette finish shutters in grey and cream colour</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/l-shaped-full-height-wardrobe-with-wallpaper-finish-shutters/corner-l-shaped-wardrobe-design.jpg.transform/bh-image-gallery/image.webp" alt="Dining Rooms" />
          <h3>L-shaped full height wardrobe with wallpaper finish shutters</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/wardrobe-with-a-combination-of-pu-gloss-finish-and-fluted-glass-shutters/wardrobe-shutter-design.jpg.transform/bh-image-gallery/image.webp" alt="Dining Rooms" />
          <h3>Wardrobe with a combination of PU gloss finish and fluted glass shutter</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/modern-contemporary-sliding-wardrobe-with-wooden-laminate-and-mirror-shutters/sliding-wardrobe-design.jpg.transform/bh-image-gallery/image.webp" alt="Dining Rooms" />
          <h3>Modern contemporary sliding wardrobe with wooden laminate and mirror shutters</h3>
        </div>
      
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
