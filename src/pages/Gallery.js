import React from 'react';
import { useParams } from 'react-router-dom';

const Gallery = () => {
    
  const { year } = useParams(); // Gets the year from the URL

  // Example data structure - you can add more images here
  const galleryData = {
    "2025": [
      { url: "/assets/gallery/2025-1.jpg", caption: "Inaugural Round" },
      { url: "/assets/gallery/2025-2.jpg", caption: "Final Argument" },
    ],
    "2026": [
      { url: "/assets/gallery/2026-1.jpg", caption: "Preparation Phase" },
    ]
  };

  const currentPhotos = galleryData[year] || [];

  return (
    <div className="fade-in">
      <div className="page-header">
        <h2>Gallery {year}</h2>
        <div className="breadcrumb">HOME / GALLERY / {year}</div>
      </div>

      <div className="container">
        {currentPhotos.length > 0 ? (
          <div className="gallery-grid">
            {currentPhotos.map((photo, index) => (
              <div key={index} className="gallery-card">
                <img src={photo.url} alt={photo.caption} />
                <div className="gallery-overlay">
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="placeholder-msg">
            <h3>Photos for the year {year} will be updated soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;