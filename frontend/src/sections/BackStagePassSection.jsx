import React from "react";
import Card from "../components/Card";
import flyingRocket from "../assets/images/flying-rocket.png";
import handMusic from "../assets/images/hand-music.png";
import plateMusic from "../assets/images/plate-music.png";
import bgVideo from "../assets/images/earth-rotate.mp4";
import deckPdf from "../assets/pdfs/Links-for-Landing-Page.pdf";

export default function BackStagePassSection() {
  const cardsData = [
    {
      img: flyingRocket,
      title: "",
      description: "Take Finay for a Spin—Explore the Ecosystem and Experience It in Action.",
      btnName: "Test Drive",
      btnUrl: "https://qa-user.finay.com/home",
      popupEnable: false,
    },
    {
      img: handMusic,
      title: "",
      description: "The Numbers. The Strategy. The Vision. Discover How Finay Is Bridging Music and Web3.",
      btnName: "The Breakdown",
      btnUrl: "#",
      popupEnable: true,
      popup: <><iframe src={deckPdf} className="pdf-viewer"></iframe></>,
    },
    {
      img: plateMusic,
      title: "",
      description: "A Glimpse Into Finay’s Next Evolution—Experience Music in a New Dimension.",
      btnName: "Step Inside",
      btnUrl: "#",
      popupEnable: true,
      popup: <>
      <div className="popup-inner-btns">
          <a href="https://spaces.vatom.com/@finay-narrative-demo" className="btn popup-concert-btn" target="_blank">
            <button>Concert</button>
          </a>
          <a href="https://spaces.vatom.com/@finay-artist-demo" className="btn popup-lounge-btn" target="_blank">
            <button>Lounge  </button>
          </a>
        </div>
      </>,
    },
  ];

  return (
    <section className="BackStagePassSection section">
      <div className="BackStagePassSection-bg-video">
        <video className="videoembed" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="BackStagePassSection-outer outer-section">
        <div className="container">
          <div className="BackStagePassSection-inner inner-section">
            <div className="section-title BackStagePassSection-title align-center">
              <h2>
                Your <span className="text-orange">Backstage</span> Pass to Finay
              </h2>
            </div>
            <div className="BackStagePassSection-description align-center">
              <p>The Platform. The Model. The Opportunity.</p>
            </div>
            <div className="BackStagePassSection-cards">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  img={card.img}
                  title={card.title}
                  description={card.description}
                  btnName={card.btnName}
                  btnUrl={card.btnUrl}
                  popupEnable={card.popupEnable} // Correctly passing true/false
                  popup={card.popup} // Passing popup content if needed
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
