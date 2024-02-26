import React, { useEffect, useState } from 'react';
import './Popup.css';
import { Link , Route , Routes } from 'react-router-dom'

const Popup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <button className="close-button" onClick={onClose}> ❌ </button>
      <Link to="/middleware">
        <img src={imageUrl} alt="Popup" />
        </Link>
       
      </div>
    </div>
  );
};

export default Popup;