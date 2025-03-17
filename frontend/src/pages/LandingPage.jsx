import React from 'react'
import HeroSection from '../sections/HeroSection'
import WhatWeSection from '../sections/WhatWeSection'

export default function LandingPage() {
  return (
    <div className='landing-page page'>
      <HeroSection/>
      <WhatWeSection/>
    </div>
  )
}
