import React, {useEffect, useRef}from 'react'
import anime from "animejs";
export default function Promotional_CTA(props) {
  const textWrapperRef = useRef(null);
  useEffect(() => {
    // Wrap every letter in a span after the component mounts
    const textWrapper = textWrapperRef.current;
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      // Anime.js animation
      anime.timeline({ loop: true })
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1),
        })
        .add({
          targets: '.ml9',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
    // Cleanup function to reset the innerHTML when component unmounts
    return () => {
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent;
      }
    };
  }, []);

  return (
    <div className="Promotional_CTA">
    <div className="Promotional_CTA-inner">
    <div className="Promotional_CTA-inner-left">
    <div className="Changesection-heading">
             <h2 className="ml9 Promotional_CTA-inner-title section-title">
              <span className="text-wrapper">
                <span className="letters" ref={textWrapperRef}>{props.title}</span>
              </span>
            </h2>
            </div>

        {/* <div className="Promotional_CTA-inner-title section-title">
          <h2>{props.title}</h2>
        </div> */}
        <div className="Promotional_CTA-inner-description">
          <p>{props.description}</p>
        </div>
        <div className="Promotional_CTA-inner-btns">
          <a href={props.btnOneUrl} className="btn Promotional_CTA-btn" target="_blank">
            <button>{props.btnOneName}</button>
          </a>
          <a href={props.btnTwoUrl} className="btn Promotional_CTA-btn" target="_blank">
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
