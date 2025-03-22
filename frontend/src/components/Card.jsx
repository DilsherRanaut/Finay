import React, { useState } from "react";

export default function Card({ img, title, description, btnName, btnUrl, popupEnable, popup }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    if (popupEnable) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Card">
      <div className="Card-inner">
        <div className="Card-img">
          <img src={img} alt="" />
        </div>
        <div className="Card-content">
          <div className="Card-content-title">
            <h4>{title}</h4>
          </div>
          <div className="Card-content-description">
            <h5>{description}</h5>
          </div>
          {btnName && (
            <div className="Card-content-btns">
              {popupEnable ? (
                <a  className="btn Card-content-btn">
                <button className="btn Card-content-btn" onClick={handleOpenPopup}>
                  {btnName}
                </button>
                </a>
              ) : (
                <a href={btnUrl} className="btn Card-content-btn" target="_blank" rel="noopener noreferrer">
                  <button>{btnName}</button>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Show popup only if popupEnable is true */}
      {popupEnable && showPopup && (
        <div className="popup-modal">
          <div className="popup-overlay" onClick={handleClosePopup}></div>
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>✖</button>
            {popup}
            
          </div>
        </div>
      )}

    </div>
  );
}
