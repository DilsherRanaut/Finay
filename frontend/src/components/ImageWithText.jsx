import React from "react";

export default function ImageWithText(props) {
  return (
    <div className="ImageWithText">
      <div className="ImageWithText-inner">
        <div className="ImageWithText-inner-left">
          <div className="ImageWithText-inner-img"><img src={props.img} alt="" /></div>
        </div>
        <div className="ImageWithText-inner-right">
          <div className="ImageWithText-inner-title section-title">
            <h2>{props.title}</h2>
          </div>
          <div className="ImageWithText-inner-description">
            <p>{props.description}</p>
          </div>
          <div className="ImageWithText-inner-btns">
            <a href={props.btnUrl} className="btn ImageWithText-btn" target="_blank">
              <button>{props.btnName}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
