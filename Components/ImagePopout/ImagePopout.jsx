import React from 'react';
import './ImagePopout.css';

const ImagePopout = ({ image, visible, position }) => {
  return (
    <div 
      className={`popout ${visible ? 'visible' : ''}`} 
      style={{ top: position.top, left: position.left }}
    >
      <img src={image} alt="Popout" />
    </div>
  );
};

export default ImagePopout;
