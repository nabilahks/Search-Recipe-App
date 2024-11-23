import React from 'react';
import imageA from '../assets/imageA.png';
import imageB from '../assets/imageB.png';
import imageC from '../assets/imageC.png';

const CustomGrid = ({ onSearch }) => {
  const items = [
    { label: 'Mexican', image: imageA, className: 'a' },
    { label: 'Indonesian', image: imageB, className: 'b' },
    { label: 'Italian', image: imageC, className: 'c' },
  ];

  return (
    <div className="custom-grid">
      {items.map((item, index) => (
        <div
          key={index}
          className={item.className}
          onClick={() => onSearch(item.label)}
          style={{ cursor: 'pointer' }}
        >
          <img src={item.image} alt={item.label} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomGrid;
