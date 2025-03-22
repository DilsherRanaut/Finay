import React, { useState } from "react";
import logo from "../assets/images/finay-logo.gif";
import bgVideo from "../assets/images/hero-bg.mp4";
import deckPdf from "../assets/pdfs/Links-for-Landing-Page.pdf";

export default function HeroSection() {
  const [showPDF, setShowPDF] = useState(false);

  const handleOpenPDF = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowPDF(true);
  };

  const handleClosePDF = () => {
    setShowPDF(false);
  };

  return (
    <section className="HeroSection section">
      <div className="HeroSection-bg-video">
        <video className="videoembed" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
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
                <h1>
                  The Future of <span className="text-orange"> Music.</span>
                  <br /> Owned by You.
                </h1>
              </div>
              <div className="HeroSection-subtitle align-center">
                <h5>Artists Keep. Fans Own. Community Run.</h5>
              </div>
              <div className="HeroSection-btns">
                <a href="/" className="btn deck-btn" onClick={handleOpenPDF}>
                  <button type="button">Check the deck</button>
                </a>
                <a
                  href="https://0zyb441m0a6.typeform.com/to/RY1v4fK7"
                  className="btn talk-us-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">Talk to us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Overlay with Centered PDF */}
      {showPDF && (
        <div className="pdf-modal">
          <div className="pdf-overlay" onClick={handleClosePDF}></div>
          <div className="pdf-container">
            <button className="close-btn" onClick={handleClosePDF}>✖</button>
            <iframe src={deckPdf} className="pdf-viewer"></iframe>
          </div>
        </div>
      )}

      
    </section>
  );
}
