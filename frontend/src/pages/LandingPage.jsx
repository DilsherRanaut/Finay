import React from 'react'
import HeroSection from '../sections/HeroSection'
import WhatWeSection from '../sections/WhatWeSection'
import BackStagePassSection from '../sections/BackStagePassSection'

export default function LandingPage() {
  return (
    <div className='landing-page page'>
      <HeroSection/>
      <WhatWeSection/>
      <BackStagePassSection/>
    </div>
  )
}
