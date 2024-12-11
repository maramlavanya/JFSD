import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Modular Kitchen Design Ideas</h1>
      <p>
      Find the perfect home interior design ideas to match your style. Get inspired with our exclusive collection of beautiful, customized designs and trends.
      Our team of interior design experts will help you create a space that reflects your personality, taste, and lifestyle. Find the perfect home interior design ideas to match your style. Get inspired with our exclusive collection of beautiful, customized designs and trends.
        Our team of interior design experts will help you create a space that reflects your personality, taste, and lifestyle.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/white-and-brown-l-shaped-modular-kitchen-with-acrylic-cabinets-and-terrazzo-backsplash/modern-kitchen-cabinets.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>White and brown l-shaped modular kitchen with acrylic cabinets and terrazzo backsplash</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/white-and-pink-u-shaped-kitchen-with-acrylic-modular-cabinets/acrylic-kitchen-cabinets.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>White and pink u-shaped kitchen with acrylic modular cabinets</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/minimalistic-crest-kitchen-design/island-kitchen-with-shutter-storage.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Minimalistic Crest Collection by Sleek Kitchen with concealed chimney</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/contemporary-crest-kitchen-design/contemporary-kitchen-design-with-open-storage.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Contemporary Crest Collection by Sleek Kitchen with open and closed storage units</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/modern-crest-kitchen-design/kitchen-design-with-window.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modernistic Crest Collection by Sleek Kitchen with vibrant colors and stone finish laminate shutters</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/vintage-connoisseur-kitchen-design/island-kitchen-with-kitchen-storage-cabinets.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>The Vintage Connoisseur by Sleek Kitchen with ivory drawers and aqua shutters</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/romantic-kitchen-design/latest-modular-kitchen-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>The Romantic by Sleek Kitchen with built-in TV cabinet and integrated wooden breakfast counter</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/epicurean-kitchen-design/luxury-modern-kitchen-designs.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>The Epicurean by Sleek Kitchen with multi-dimensional island counter</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/classic-crest-kitchen-design/island-kitchen-with-glass-kitchen-cabinets.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Classic Crest Collection by Sleek Kitchen with quartz backsplash and mesh glass shutters</h3>
        </div>
        <div className="design-item">
          <img src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/emperor-kitchen-design/kitchen-design-with-modular-kitchen-cabinets-and-tall-storage.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>The Emperor by Sleek Kitchen with modular storage and tall showcase shelves</h3>
        </div>
        <div className="design-item">
          <img src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/nature-lover-kitchen-design/latest-modular-kitchen-design.jpg.transform/bh-gallery-listing/image.webpi" alt="Dining Rooms" />
          <h3>The Nature Lover by Sleek Kitchen with rolling shutters cabinets</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
