import React from "react";

export default function CallToAction(props) {
  return (
    <div className="CallToAction">
      <div className="CallToAction-inner">
        <div className="CallToAction-inner-title section-title align-center">
          <h2>{props.title}</h2>
        </div>
        <div className="CallToAction-inner-description align-center">
          <p>{props.description}</p>
        </div>
        <div className="CallToAction-inner-btns">
          <a href={props.btnOneUrl} className="btn CallToAction-btn" target="_blank">
            <button>{props.btnOneName}</button>
          </a>
          <a href={props.btnTwoUrl} className="btn CallToAction-btn" target="_blank">
            <button>{props.btnTwoName}</button>
          </a>
        </div>
      </div>
    </div>
  );
}
