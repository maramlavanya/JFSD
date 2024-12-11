import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Dining Room Interior Design Ideas</h1>
      <p>
      Check out the latest dining room interior design ideas from Beautiful Homes. Explore our gallery for modern & classic dining room designs with helpful dining room designer tips & advice to get you started on your home interior journey today.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/contemporary-dining-room-with-bevelled-mirror-panel/dining-room-interior-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Contemporary dining room with bevelled mirror panels</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/classic-dining-room-with-slatted-wooden-table-and-floral-wallpaper-arch/dining-table-set-4-seater.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>Classic dining room with slatted wooden table and floral wallpaper arch</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/elegant-dining-room-with-neutral-colour-palette-and-intricate-wallpaper/dining-table-set.jpg.transform/bh-image-gallery/image.webp" alt="Dining Rooms" />
          <h3>Elegant dining room with neutral colour palette and intricate wallpaper</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/eclectic-4-seater-dining-room-with-round-dining-table-and-patterned-wallpapers/dining-table-4-seater.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Eclectic 4-seater dining room with round dining table and patterned wallpapers</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/bohemian-dining-room-with-marble-dining-table-and-upholstered-chairs-with-checks/modern-marble-dining-table.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Bohemian dining room with marble dining table and upholstered chairs with checks</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/white-and-brown-modern-dining-room-with-chandelier/dining-table-set-4-seater.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>White and brown modern dining room with chandelier</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/black-and-white-modern-dining-room-with-floral-wallpaper/dining-room-with-modern-dining-chairs.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Black and white modern dining room with floral wallpaper</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/contemporary-6-seater-dining-room-with-floral-accents/dining%20table-set-6-seater.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Contemporary 6-seater dining room with floral accents</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/modern-contemporary-round-marble-dining-table-with-beige-armless-chairs/dining-table-4-seater.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Modern contemporary round marble dining table with beige armless chairs</h3>
        </div>

      </div>
    </div>
  );
};

export default HomeDesignIdeas;
