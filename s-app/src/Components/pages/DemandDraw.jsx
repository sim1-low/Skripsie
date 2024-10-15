import React, { useState } from 'react';
import D0 from './images/Draw/D0.png'
import D1 from './images/Draw/D1.png'
import D2 from './images/Draw/D2.png'
import D3 from './images/Draw/D3.png'
import D4 from './images/Draw/D4.png'
import D5 from './images/Draw/D5.png'
import D6 from './images/Draw/D6.png'
import './Draw.css'

const DemGal = ({imageWidth = 300}) => {
  const images = [
    D0, D1, D2, D3, D4, D5, D6
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

export default DemGal;