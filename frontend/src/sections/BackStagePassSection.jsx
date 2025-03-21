import React from 'react'
import Card from '../components/Card'
import flyingRocket from "../assets/images/flying-rocket.png"
import handMusic from "../assets/images/hand-music.png"
import plateMusic from "../assets/images/plate-music.png"
import bgVideo from "../assets/images/earth-rotate.mp4"

export default function BackStagePassSection() {
  return (
    <section className="BackStagePassSection section">
        <div className="BackStagePassSection-bg-video">
                <video className="videoembed" autoPlay loop muted>
                  <source src={bgVideo} type="video/mp4"/>
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
                  <p>
                  The Platform. The Model. The Opportunity.
                  </p>
                </div>
                <div className="BackStagePassSection-cards">
                    <Card img={flyingRocket} title="" description="Take Finay for a Spin—Explore the Ecosystem and Experience It in Action." btnName="Test Drive" btnUrl="https://qa-user.finay.com/home"/>
                    <Card img={handMusic} title="" description="The Numbers. The Strategy. The Vision. Discover How Finay Is Bridging Music and Web3." btnName="The Breakdown" btnUrl="#"/>
                    <Card img={plateMusic} title="" description="A Glimpse Into Finay’s Next Evolution—Experience Music in a New Dimension." btnName="Step Inside" btnUrl="#"/>
                    
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
