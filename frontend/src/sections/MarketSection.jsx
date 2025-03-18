import React from 'react'
import CounterCounterCard from '../components/CounterCard'

export default function MarketSection() {
  return (
     <section className="MarketSection section">
          <div className="MarketSection-outer outer-section">
            <div className="container">
              <div className="MarketSection-inner inner-section">
              <div className="section-title MarketSection-title align-center">
                    <h2>The Market <span className="text-orange">Speaks. </span>Finay Listens.</h2>
                </div>
                <div className="MarketSection-desciption align-center">
                    <p>Artists make pennies. Fans fund billions. What’s broken?</p>
                </div>
                <div className="MarketSection-cards">
                    <CounterCounterCard title={<>Streaming Platforms Take 65% of Global Music Revenue—Artists See Less Than 12%.</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}/>
                    <CounterCounterCard title={<>Indie Artists—The Fastest-Growing Segment—Made $1.2B in 2022.</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}/>
                    <CounterCounterCard title={<>Music NFTs Are Set to Grow From $2.85B to $20.81B by 2032 (28.23% CAGR).</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}/>
                    <CounterCounterCard title={<>70% of Fans Want to Support Artists Directly, but Streaming & Ticketing Keep Them Locked Out.</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}/>
                    <CounterCounterCard title={<> Livestreaming Will Hit $247B by 2027—Artists Are Already Cashing In.</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}/>
                    <CounterCounterCard title={<>DAOs Manage Over $25.1B in Treasuries—Community-Led Platforms Are the Future.</> } description={<>From Vision to Execution, See the Full Picture. <br /><br />Beyond the Deck, Where Strategy Becomes Reality. Explore Finay’s VDR and Uncover What’s Ahead.</>}/>
                   
                </div>
    
                
    
              </div>
            </div>
          </div>
        </section>
  )
}
