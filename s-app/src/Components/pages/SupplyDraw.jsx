import React, { useState } from 'react';
import S0 from './images/Draw/S0.png'
import S1 from './images/Draw/S1.png'
import S2 from './images/Draw/S2.png'
import S3 from './images/Draw/S3.png'
import S4 from './images/Draw/S4.png'
import S5 from './images/Draw/S5.png'
import S6 from './images/Draw/S6.png'
import './Draw.css'

const SupGal = ({imageWidth = 300}) => {
  const images = [
    S0, S1, S2, S3, S4, S5, S6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div >
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <button className="next-button" onClick={nextImage}>
        Draw Graph
      </button>
    </div>
  );
};

export default SupGal;