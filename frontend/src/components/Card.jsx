import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Card-inner">
        <div className="Card-img">
          <img src={props.img} alt="" />
        </div>
        <div className="Card-content">
          <div className="Card-content-title">
            <h4>{props.title}</h4>
          </div>
          <div className="Card-content-description">
            <h5>{props.description}</h5>
          </div>
          <div className="Card-content-btns">
            <a href="#" className="btn Card-content-btn">
                <button>test Drive</button> </a>

          </div>
        </div>
      </div>
    </div>
  );
}
