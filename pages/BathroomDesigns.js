import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Bathroom Design Ideas</h1>
      <p>
      Get inspired with stunning bathroom interior design ideas & home renovation tips from Beautiful Homes! Find the perfect bathroom designs, no matter if you’re looking for small or spacious ideas. Our selection of bathroom interior designs covers all styles and budgets.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/luxury-white-bathroom-with-vintage-style-vanity-and-vibrant-shower-wall/white-tiled-bathroom.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Luxury white bathroom with vintage style vanity and vibrant shower wall</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/minimalist-bathroom-with-pedestal-wash-basin-and-fixed-window/minimalist-toilet.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>Minimalist bathroom with pedestal wash basin and fixed window</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/modern-contemporary-bathroom-with-beige-patterned-tiles-and-wall-mounted-vanity/beige-bathroom-tiles.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern contemporary bathroom with beige patterned tiles and wall mounted vanity</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/eclectic-bathroom-with-green-subway-tiles-and-grey-terrazzo-flooring/dark-green-bathroom-tiles-with-grey-terrazzo-tile-bathroom.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Eclectic bathroom with green subway tiles and grey terrazzo flooring</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/bathroom-design-with-circular-led-mirror-and-shower-cubicle/led-bathroom-mirror-with-shower.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Bathroom design with circular led mirror and shower cubicle</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/modern-contemporary-bathroom-with-mosaic-brown-wall-tiles-and-capsule-shaped-mirror/mosaic-bathroom-tiles.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern contemporary bathroom with mosaic brown wall tiles and capsule shaped mirror</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/modern-contemporary-beige-bathroom-with-blue-asian-paints-printed-tiles-and-bath-fittings/beige-bathroom-wall-tiles-with-blue-bathroom-floor-tiles.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern contemporary beige bathroom with blue  Paints printed tiles and bath fittings</h3>
        </div>
        <div className="design-item">
          <img src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/bohemian-bathroom-style-with-asian-paints-morrocan-tiles-and-bath-fittings/luxury-bathroom-tiles-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Bohemian Bathroom Style with Paints Morrocan Tiles and Bath Fittings</h3>
        </div>
        <div className="design-item">
          <img src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/luxurious-white-bathroom-with-asian-paints-wall-tiles-and-arched-niches/luxurious-bathroom-wall-tiles.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Luxurious White Bathroom with Paints Wall Tiles and Arched Niches</h3>
        </div>
        <div className="design-item">
          <img src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/simple-beige-and-green-bathroom-with-wooden-vanity-unit/light-green-bathroom-tiles.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Simple beige and green bathroom with wooden vanity unit</h3>
        </div>

      </div>
    </div>
  );
};

export default HomeDesignIdeas;
