import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Bedroom Design Ideas</h1>
      <p>
      At Beautiful Homes, you'll find a wide range of modern bedroom interior designs that are sure to suit your style. Explore our selection of stylish and affordable bedroom designs and get inspired to create the perfect space for comfort and relaxation!.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/modern-and-vibrant-bunk-bedroom-with-study-table/childrens-bedroom-interior-design.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Modern and vibrant bunk bedroom with study table</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/vibrant-kids-bedroom-with-twin-beds-and-wooden-dresser/children-bedroom-design.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>Vibrant kids bedroom with twin beds and wooden dresser</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/modern-countryside-nursery-with-floral-wallpaper/childrens-room-furniture.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern countryside nursery with floral wallpaper</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/contemporary-master-bedroom-with-geometrical-fabric-wall-paneling/master-bedroom-interior-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Contemporary master bedroom with geometrical fabric wall paneling</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/eclectic-kids-bedroom-with-fluted-wall-panel/childrens-bedroom-interior-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Eclectic kids bedroom with fluted wall panel</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/contemporary-kids-bedroom-with-bunk-bed-and-study-table/children-room-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Contemporary kids bedroom with bunk bed and study table</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/modern-bedroom-with-tufted-headboard-bed-and-arched-wall-paneling/modern-bedroom-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern bedroom with tufted headboard bed and arched wall paneling</h3>
        </div>
       
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
