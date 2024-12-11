import React from "react";
import "./HomeDesignIdeas.css"; // Import a CSS file to style the layout

const HomeDesignIdeas = () => {
  return (
    <div className="home-design-ideas">
      <h1>Mandir Design Ideas</h1>
      <p>
      Bring a touch of tradition to your home with beautiful, small and affordable pooja room designs. Browse our wide range of mandir designs, get cost estimates for free and transform your space into a sanctuary for prayer and peace.
      </p>
      <div className="design-gallery">
        {/* First Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/traditional-wooden-puja-unit-with-jali-partition/wooden-pooja-mandir-designs-for-home.jpg.transform/bh-gallery-listing/image.webp" alt="Kitchen Designs" />
          <h3>Traditional wooden puja unit with jali partition</h3>
        </div>
        
        {/* Second Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/modern-contemporary-puja-room-with-decorative-wall-panel/designer-pooja-room.jpg.transform/bh-gallery-listing/image.webp" alt="Living Rooms" />
          <h3>Modern contemporary puja room with decorative wall panel</h3>
        </div>
        
        {/* Third Design */}
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/modern-puja-unit-with-storage-and-cnc-back-panel/modern-pooja-room-designs.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern puja unit with storage and CNC back panel</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/modern-puja-unit-with-dark-wood-storage-and-backlit-om-mandala/home-temple-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern puja unit with dark wood storage and backlit Om mandala</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/Classical-white-puja-unit-with-decorative-jali-panel-head-and-bells/pooja-room-interior-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Classical white puja unit with decorative jali panel head and bells</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/contemporary-puja-unit-with-white-jali-and-wooden-stand/mandir-jali-design.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Contemporary puja unit with white jali and wooden stand</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/traditional-puja-room-with-arched-wallpaper-and-wooden-storage/traditional-wooden-pooja-mandir-designs-for-home.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Traditional puja room with arched wallpaper and wooden storage</h3>
        </div>
        <div className="design-item">
          <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/modern-indian-puja-room-with-black-wallpaper-with-gold-motifs/small-pooja-room-designs-for-home.jpg.transform/bh-gallery-listing/image.webp" alt="Dining Rooms" />
          <h3>Modern Indian puja room with black wallpaper with gold motifs</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignIdeas;
