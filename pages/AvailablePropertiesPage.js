import React from "react";
import { Link } from "react-router-dom";
import "./AvailablePropertiesPage.css";

const categories = [
  { name: "Home Design Ideas", path: "/home-design" },
  { name: "Hallway Designs", path: "/hallway-designs" },
  { name: "TV Unit Designs", path: "/tv-unit-designs" },
  { name: "Living Room Designs", path: "/living-room-designs" },
  { name: "Modular Kitchen Designs", path: "/modular-kitchen-designs" },
  { name: "Bedroom Designs", path: "/bedroom-designs" },
  { name: "Bathroom Designs", path: "/bathroom-designs" },
  { name: "Dining Room Designs", path: "/dining-room-designs" },
  { name: "Pooja Room Designs", path: "/pooja-room-designs" },
  { name: "Study Room Designs", path: "/study-room-designs" },
  { name: "Balcony Designs", path: "/balcony-designs" },
  { name: "Wardrobe Designs", path: "/wardrobe-designs" },
  { name: "False Ceiling Designs", path: "/false-ceiling-designs" },
  { name: "Home Office Designs", path: "/home-office-designs" },
  { name: "Crockery Unit Designs", path: "/crockery-unit-designs" },
  { name: "Tile Designs", path: "/tile-designs" },
  { name: "Bed Designs", path: "/bed-designs" },
  { name: "Flooring Designs", path: "/flooring-designs" },
];

const AvailablePropertiesPage = () => {
  return (
    <div className="available-properties-page">
      <h1>Available Design Modules</h1>
      <div className="design-grid">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="design-button">
            {category.name}
          </Link>
        ))}
      </div>
      <div className="side-banner">
        <h2>Discover your design style</h2>
        <p>Get an instant moodboard customized according to your style.</p>
        <img src="https://www.beautifulhomes.asianpaints.com/interior-design-services/design-guide/_jcr_content/root/container/responsivegrid/responsivegrid_123_c/responsivegrid_498308749/teaser.coreimg.jpeg/1729593289626/living-room.jpeg" alt="Design Style" />
      </div>
    </div>
  );
};

export default AvailablePropertiesPage;
