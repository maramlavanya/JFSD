import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Living Room Interior Design Ideas</h1>
      <p>
      Looking for inspiring living room interior design ideas? Discover fresh designs and ideas from our handpicked selection of wall paintings and designs, modular TV units and hall designs. Create the perfect living space with us.
      </p>
      <div className="filter">
        <div className="filter-text">
          <span>Looking for something specific?</span>
        </div>
        <div className="filter-options">
          <Link to="/small">
            <button>Small</button>
          </Link>
          <Link to="/l-shaped">
            <button>L-Shaped</button>
          </Link>
          <Link to="/u-shaped">
            <button>U-Shaped</button>
          </Link>
          <Link to="/pvc">
            <button>PVC</button>
          </Link>
          <Link to="/semi-modular">
            <button>Semi-Modular</button>
          </Link>
          <Link to="/acrylic">
            <button>Acrylic</button>
          </Link>
          <Link to="/parallel">
            <button>Parallel</button>
          </Link>
          <Link to="/open">
            <button>Open</button>
          </Link>
          <Link to="/wooden">
            <button>Wooden</button>
          </Link>
          <Link to="/island">
            <button>Island</button>
          </Link>
        </div>
      </div>
      <div className="design-gallery">
        {/* Design Items */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/bohemian-living-room-corner-with-swing-and-bookshelf/modern-living-room-corner-decor.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Bohemian living room corner with swing and bookshelf</h3>
        </div>
        {/* Add more design items as needed */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/classic-living-room-with-red-accent-wall-and-floral-wallpaper/living-room-modern-wall-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Classic living room with red accent wall and floral wallpaper</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/bohemian-living-room-with-l-shaped-sofa-and-wooden-partition/modern-living-room-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Bohemian living room corner with swing and bookshelf</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/bohemian-living-room-corner-with-swing-and-bookshelf/modern-living-room-corner-decor.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Bohemian living room with l-shaped sofa and wooden partition</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/living-room-corner-with-floor-cushion-and-framed-artwork/modern-trendy-living-room-decor.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Living room corner with floor cushion and framed artwork</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/living-room-reading-corner-with-leather-armchair/comfortable-living-room-chairs.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Living room reading corner with leather armchairf</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/classical-vibrant-living-room-with-wall-niches-and-chandelier/living-room-modern-wall-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Classical vibrant living room with wall niches and chandelier</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
