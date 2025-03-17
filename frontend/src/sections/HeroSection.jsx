import React from "react";
import logo from "../assets/images/finay-logo.gif"
import bgVideo from "../assets/images/hero-bg.mp4"

export default function HeroSection() {
  return (
    <section className="HeroSection section">
      <div className="HeroSection-bg-video">
        <video className="videoembed" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4"/>
        </video>
      </div>
      <div className="HeroSection-outer outer-section">
        <div className="container">
          <div className="HeroSection-inner inner-section">
              <div className="animated-logo align-center">
                  <img src={logo} alt="Finay Logo" />
              </div>

            <div className="HeroSection-content">
            <div className="HeroSection-title align-center">
                <h1>The Future of <span className="text-orange"> Music.</span><br/> Owned by You.</h1>
            </div>
            <div className="HeroSection-subtitle align-center">
                <h5>Artists Keep. Fans Own. Community Run.</h5>
            </div>
            <div className="HeroSection-btns ">
                <a href="/" className="btn deck-btn"><button type="button">Check the deck</button></a>
                <a href="/" className="btn talk-us-btn"><button type="button">Talk to us</button></a>
            </div>

            </div>
            
          </div>
        </div>        
      </div>      
    </section>
  );
}
