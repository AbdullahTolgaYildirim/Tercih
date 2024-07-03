import './calculater.css'
import React from 'react';

import { useNavigate } from 'react-router-dom';

const images = [
  { src: 'images/biyoloji.jpeg', link: '/biyoloji' },
  { src: 'images/cografya.png', link: '/Cografya' },
  { src: 'images/dilanlatım1.webp', link: '/dilanlatim' },
  { src: 'images/dinkültürü.png', link: '/Dil' },
  { src: 'images/edebiyat.png', link: '/Dil' },
  { src: 'images/fizik.png', link: '/Dil' },
  { src: 'images/kimya.png', link: '/Dil' },
  { src: 'images/matematik.png', link: '/Dil' },
  { src: 'images/tarih.jpeg', link: '/Dil' },
  { src: 'images/dil1.jpeg', link: '/Dil' },

];

function Yks() {
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container" onClick={() => handleImageClick(image.link)}>
          <img src={image.src} alt={`Navigate to ${image.link}`} />
        </div>
      ))}
    </div>
  );
}

export default Yks;