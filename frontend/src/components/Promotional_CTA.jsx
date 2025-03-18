import React from 'react'

export default function Promotional_CTA(props) {
  return (
    <div className="Promotional_CTA">
    <div className="Promotional_CTA-inner">
    <div className="Promotional_CTA-inner-left">
        <div className="Promotional_CTA-inner-title section-title">
          <h2>{props.title}</h2>
        </div>
        <div className="Promotional_CTA-inner-description">
          <p>{props.description}</p>
        </div>
        <div className="Promotional_CTA-inner-btns">
          <a href={props.btnOneUrl} className="btn Promotional_CTA-btn">
            <button>{props.btnOneName}</button>
          </a>
          <a href={props.btnTwoUrl} className="btn Promotional_CTA-btn">
            <button>{props.btnTwoName}</button>
          </a>
        </div>
      </div>
      <div className="Promotional_CTA-inner-right">
        <div className="Promotional_CTA-inner-img"><img src={props.img} alt="img" /></div>
      </div>
      
    </div>
  </div>
  )
}
