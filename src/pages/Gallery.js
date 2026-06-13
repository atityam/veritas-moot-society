import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Gallery = () => {
  const { year } = useParams();

  const galleryData = {
    "2025": [
      "IMG-20260114-WA0087.jpg", "IMG-20260114-WA0084.jpg", "IMG-20260114-WA0083.jpg", 
      "IMG-20260114-WA0082.jpg", "IMG-20260114-WA0081.jpg", "IMG-20260114-WA0080.jpg", 
      "IMG-20260114-WA0079.jpg", "IMG-20260114-WA0077.jpg", "IMG-20260114-WA0075.jpg", 
      "IMG-20260114-WA0074.jpg", "IMG-20260114-WA0073.jpg", "IMG-20260114-WA0070.jpg", 
      "IMG-20260114-WA0068.jpg", "IMG-20260114-WA0063.jpg", "IMG-20260114-WA0056.jpg", 
      "IMG-20260114-WA0050.jpg", "IMG-20260114-WA0049.jpg", "IMG-20260114-WA0047.jpg", 
      "IMG-20260114-WA0046.jpg", "IMG-20260114-WA0042.jpg", "IMG-20260114-WA0040.jpg", 
      "IMG-20260114-WA0038.jpg", "IMG-20260114-WA0034.jpg", "IMG-20260114-WA0033.jpg", 
      "IMG-20260114-WA0031.jpg", "IMG-20260114-WA0028.jpg", "IMG-20260114-WA0026.jpg", 
      "IMG-20260114-WA0025.jpg", "IMG-20260114-WA0016.jpg", "IMG-20260114-WA0015.jpg", 
      "IMG-20260114-WA0014.jpg", "IMG-20260114-WA0013.jpg", "IMG-20260114-WA0012.jpg", 
      "IMG-20260114-WA0011.jpg", "IMG-20260114-WA0010.jpg", "IMG-20260114-WA0009.jpg", 
      "IMG-20260114-WA0004.jpg", "IMG-20260114-WA0001.jpg", "IMG_20260114_095124.jpg"
    ],
    "2026": [
  "DSC_4553.JPG",
  "DSC_4555.JPG",
  "DSC_4556.JPG",
  "DSC_4559.JPG",
  "DSC_4563.JPG",
  "DSC_4768.JPG",
  "DSC_4771.JPG",
  "DSC_4784.JPG",
  "DSC_4786.JPG",
  "DSC_4790.JPG",
  "DSC_4865.JPG",
  "DSC_4882.JPG",
  "DSC_4885.JPG",
  "DSC_4924 (1).JPG",
  "DSC_4924.JPG",
  "DSC_4957.JPG",
  "DSC_4966.JPG",
  "DSC_4982.JPG",
  "DSC_5017.JPG",
  "DSC_5068.JPG",
  "DSC_5073.JPG",
  "DSC_5088.JPG",
  "DSC_5095.JPG",
  "IMG_0429.JPG",
  "IMG_0582.JPG",
  "IMG_0718.JPG",
  "IMG_0720.JPG",
  "IMG_0721.JPG",
  "IMG_0726.JPG",
  "IMG_9268.DNG",
  "IMG_9269.DNG",
  "IMG_9270.DNG",
  "IMG_9271.DNG",
  "IMG_9272.DNG",
  "IMG_9274.DNG",
  "IMG_9283.DNG",
  "IMG_9265.jpg",
  "IMG_9363.jpg",
  "IMG_9364.jpg",
  "IMG_9370.jpg",
  "IMG_9366.DNG",
  "IMG_9367.DNG",
  
  

  "DSC_2956.JPG", "IMG-20260123-WA0168.jpg", "IMG-20260123-WA0167.jpg",
  "IMG-20260123-WA0166.jpg", "IMG-20260123-WA0165.jpg", "IMG-20260123-WA0162.jpg",
  "IMG-20260123-WA0161.jpg", "IMG-20260123-WA0159.jpg", "IMG-20260123-WA0156.jpg",
  "IMG-20260123-WA0140.jpg", "IMG-20260123-WA0139.jpg", "IMG-20260123-WA0110.jpg",
  "IMG-20260123-WA0025.jpg", "IMG-20260123-WA0016.jpg", "IMG_9419.JPG",
  "IMG_9414.JPG", "IMG_9409.JPG", "IMG_9396.JPG", "IMG_9384.JPG",
  "IMG_9362.JPG", "IMG_9359.JPG", "IMG_9358.JPG", "IMG_9355.JPG",
  "IMG_9353.JPG", "IMG_9351.JPG", "IMG_9349.JPG", "IMG_9346.JPG",
  "IMG_9343.JPG", "IMG_9341.JPG", "IMG_9334.JPG", "IMG_9313.JPG",
  "IMG_9312.JPG", "IMG_9308.JPG", "IMG_9303.JPG", "IMG_9285.JPG",
  "IMG_9284.JPG", "IMG_9275.JPG", "IMG_9272.JPG", "IMG_9270.JPG",
  "IMG_9267.JPG", "DSC_3506.JPG", "DSC_3499.JPG", "DSC_3485.JPG",
  "DSC_3481.JPG", "DSC_3480.JPG", "DSC_3478.JPG", "DSC_3460.JPG",
  "DSC_3456.JPG", "DSC_3454.JPG", "DSC_3451.JPG", "DSC_3448.JPG",
  "DSC_3447.JPG", "DSC_3446.JPG", "DSC_3441.JPG", "DSC_3438.JPG",
  "DSC_3380.JPG", "DSC_3350.JPG", "DSC_3341.JPG", "DSC_3330.JPG",
  "DSC_3312.JPG", "DSC_3221.JPG", "DSC_3208.JPG", "DSC_3119.JPG",
  "DSC_3035.JPG", "DSC_3034.JPG", "DSC_3033.JPG", "DSC_3026.JPG",
  "DSC_3020.JPG", "DSC_3015.JPG", "DSC_3010.JPG", "DSC_3008.JPG",
  "DSC_3004.JPG", "DSC_3001.JPG", "DSC_2999.JPG", "DSC_2978.JPG",
  "DSC_2960.JPG", "DSC_2899.JPG", "DSC_2801.JPG", "DSC_2796.JPG",
  "DSC_2787.JPG", "DSC_2784.JPG"
]
  };

  const currentPhotos = galleryData[year] || [];

  return (
    <div className="fade-in">
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')` }}>
        <h2>Gallery {year}</h2>
        <div className="breadcrumb">HOME / GALLERY / {year}</div>
      </div>

      <div className="container">
        {currentPhotos.length > 0 ? (
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {currentPhotos.map((fileName, index) => (
              <div key={index} className="gallery-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
                <img 
                  src={`/assets/gallery/${year}/${fileName}`} 
                  alt={`Event ${year} - ${index}`} 
                  loading="lazy"
                  style={{ width: '100%', height: '350px', objectFit: 'contain', display: 'block', transition: 'transform 0.3s', backgroundColor: '#fff', padding: '10px' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src="/assets/logo.png"; // Fallback to society logo if image fails
                    e.target.style.objectFit = "contain";
                    e.target.style.padding = "20px";
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="placeholder-msg" style={{ textAlign: 'center', padding: '100px 0' }}>
            <h3 style={{ color: '#800000', marginBottom: '20px' }}>Photos for the year {year} will be updated soon.</h3>
            <Link to="/" className="view-btn">Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;