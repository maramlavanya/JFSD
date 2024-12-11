import React from 'react';
import './HighCostPropertiesPage.css';

const highCostProperties = [
  {
    id: 1,
    title: '8345 Serrano Ave',
    price: '$300,000',
    size: '3258 sq ft',
    yearBuilt: 'N/A',
    propertyType: 'Single Family',
    location: 'Woodland Hills, CA 91367',
    images: [
      'https://cdn.buildofy.com/projects/443731c2-e5e5-4b3e-a212-9ae14ace0dc9.jpeg', // Replace with actual image paths
      'https://nppartners.net/wp-content/uploads/2023/02/NPP-luxury-home-interiors.png',
      'https://sumesshmenonassociates.com/wp-content/uploads/2021/05/content-images-3A.jpg',
      'https://www.360interiordesigning.com/assets/interiordesigerfeaturedimage/FEATUREDIMG12051696415446.jpg',
    ],
    agent: {
      name: 'Alex Graham',
      email: 'alexgraham@example.com',
      contact: 'Contact Agent',
    },
  },
  {
    id: 1,
    title: 'Modern Downtown Condo',
    price: '$450,000',
    size: '1500 sq ft',
    yearBuilt: '2018',
    propertyType: 'Condo',
    location: 'Downtown, Los Angeles, CA 90015',
    images: [
      'https://images.trvl-media.com/lodging/46000000/45840000/45838600/45838600/837b35e7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/227689207.jpg?k=118645fb0b0e4946c3d52b00c25225e264f193ed6adbf579189a111bd78e3ac8&o=&hp=1',
      'https://image-tc.galaxy.tf/wijpeg-eai5yikn466zm22rrielad3yz/02-p1691579_standard.jpg?crop=67%2C0%2C1067%2C800',
      'https://cdn.vox-cdn.com/thumbor/-et7RrjeGK82qvNxO64WUvmpvdA=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19623974/Screen_Shot_2020_01_23_at_1.09.14_PM.png',
    ],
    agent: {
      name: 'Jessica Thompson',
      email: 'jessica@example.com',
      contact: 'Contact Agent',
    },
  },
  {
    id: 2,
    title: 'Luxury Waterfront Villa',
    price: '$2.5 Million',
    size: '5500 sq ft',
    yearBuilt: '2015',
    propertyType: 'Villa',
    location: 'Malibu, CA 90265',
    images: [
      '/images/villa1-1.jpg',
      '/images/villa1-2.jpg',
      '/images/villa1-3.jpg',
      '/images/villa1-4.jpg',
    ],
    agent: {
      name: 'David Richards',
      email: 'davidrichards@example.com',
      contact: 'Contact Agent',
    },
  },
  {
    id: 3,
    title: 'Spacious Family Home',
    price: '$725,000',
    size: '4000 sq ft',
    yearBuilt: '2012',
    propertyType: 'Single Family Home',
    location: 'San Diego, CA 92130',
    images: [
      '/images/home1-1.jpg',
      '/images/home1-2.jpg',
      '/images/home1-3.jpg',
      '/images/home1-4.jpg',
    ],
    agent: {
      name: 'Karen Miller',
      email: 'karenmiller@example.com',
      contact: 'Contact Agent',
    },
  },
  {
    id: 4,
    title: 'Charming Cottage Retreat',
    price: '$350,000',
    size: '2200 sq ft',
    yearBuilt: '2005',
    propertyType: 'Cottage',
    location: 'Lake Tahoe, CA 96150',
    images: [
      '/images/cottage1-1.jpg',
      '/images/cottage1-2.jpg',
      '/images/cottage1-3.jpg',
      '/images/cottage1-4.jpg',
    ],
    agent: {
      name: 'Mark Davis',
      email: 'markdavis@example.com',
      contact: 'Contact Agent',
    },
  },
  {
    id: 5,
    title: 'Gated Estate in the Hills',
    price: '$1.8 Million',
    size: '6500 sq ft',
    yearBuilt: '2010',
    propertyType: 'Estate',
    location: 'Beverly Hills, CA 90210',
    images: [
      '/images/estate1-1.jpg',
      '/images/estate1-2.jpg',
      '/images/estate1-3.jpg',
      '/images/estate1-4.jpg',
    ],
    agent: {
      name: 'Sophia Carter',
      email: 'sophiacarter@example.com',
      contact: 'Contact Agent',
    },
  },
  {
    id: 6,
    title: 'Cozy Mountain Cabin',
    price: '$450,000',
    size: '1800 sq ft',
    yearBuilt: '2017',
    propertyType: 'Cabin',
    location: 'Aspen, CO 81611',
    images: [
      '/images/cabin1-1.jpg',
      '/images/cabin1-2.jpg',
      '/images/cabin1-3.jpg',
      '/images/cabin1-4.jpg',
    ],
    agent: {
      name: 'Ethan Scott',
      email: 'ethanscott@example.com',
      contact: 'Contact Agent',
    },
  },
  // Add more properties as needed
];

const HighCostPropertiesPage = () => {
  return (
    <div className="high-cost-properties-container">
      {highCostProperties.map((property) => (
        <div className="property-card" key={property.id}>
          <div className="property-images">
            <img src={property.images[0]} alt={property.title} className="main-image" />
            <div className="thumbnail-images">
              {property.images.slice(1).map((img, index) => (
                <img src={img} alt={`Thumbnail ${index + 1}`} key={index} className="thumbnail" />
              ))}
            </div>
          </div>
          <div className="property-info">
            <h2>{property.title}</h2>
            <p><strong>Price:</strong> {property.price}</p>
            <p><strong>Size:</strong> {property.size}</p>
            <p><strong>Year Built:</strong> {property.yearBuilt}</p>
            <p><strong>Property Type:</strong> {property.propertyType}</p>
            <p><strong>Location:</strong> {property.location}</p>
          
          <div className="agent-info">
            <p><strong>Listing Agent:</strong> {property.agent.name}</p>
            <p><strong>Email:</strong> <a href={`mailto:${property.agent.email}`}>{property.agent.email}</a></p>
            <button onClick={() => alert('Contacting agent...')} className="contact-button">
              {property.agent.contact}
            </button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default HighCostPropertiesPage;
