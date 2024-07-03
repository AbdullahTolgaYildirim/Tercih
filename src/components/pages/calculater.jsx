import './calculater.css'
import React from 'react';

import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const images = [
  { src: 'images/tytson.jpeg', link: '/Tyt' },
  { src: 'images/aytson.jpeg', link: '/Ayt' },
  { src: 'images/obpson.jpeg', link: '/Obp' },
  { src: 'images/yksson.jpeg', link: '/Dil' },
];

function Calculater() {
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  return (
    <div>
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container" onClick={() => handleImageClick(image.link)}>
          <img src={image.src} alt={`Navigate to ${image.link}`} />
        </div>
      ))}
     
    </div>
    <Footer/>
    </div>
    
  );
}

export default Calculater;
