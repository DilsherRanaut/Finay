import React from 'react'

export default function VerticalCard(props) {
  return (
    <div className="VerticleCard">
        <div className="VerticleCard-inner">
            <div className="VerticleCard-img">
                <img src={props.img} alt="" />
            </div>
            <div className="VerticleCard-content">
            <div className="VerticleCard-content-title">
                <h4>{props.title}</h4>
            </div>
            <div className="VerticleCard-content-description">
                <p>{props.description}</p>
            </div>
            </div>

        </div>
      
    </div>
  )
}
