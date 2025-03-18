import React from 'react'

export default function CounterCounterCard(props) {
  return (
    <div className="CounterCard">
    <div className="CounterCard-inner">
      <div className="CounterCard-img">
        <img src={props.img} alt="" />
      </div>
      <div className="CounterCard-content">
        <div className="CounterCard-content-title align-center">
          <h2>{props.title}</h2>
        </div>
        <div className="CounterCard-content-description align-center">
          <p>{props.description}</p>
        </div>
        
      </div>
    </div>
  </div>
  )
}
