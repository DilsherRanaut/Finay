import React from "react";

export default function ImageWithText(props) {
  return (
    <div className="ImageWithText">
      <div className="ImageWithText-inner">
        <div className="ImageWithText-inner-left">
          <div className="ImageWithText-inner-img"></div>
        </div>
        <div className="ImageWithText-inner-right">
          <div className="ImageWithText-inner-title">
            <h4>{props.title}</h4>
          </div>
          <div className="ImageWithText-inner-description">
            <h5>{props.description}</h5>
          </div>
          <div className="ImageWithText-inner-btns">
            <a href="#" className="btn Card-content-btn">
              <button>test Drive</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
