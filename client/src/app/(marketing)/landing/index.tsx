import React from 'react'
import Hero from '../components/Hero'
import LogoCollection from '../components/LogoCollection'
import Features from '../components/Features'
import Highlights from '../components/HIghlights'
import Testimonials from '../components/Testimonials'

const index = () => {
  return (
    <div>
        <div className=''>
          <Hero />
          <div>
            <LogoCollection />
            <Features />
            <Highlights />
            <Testimonials />
          </div>
        </div>
    </div>
  )
}

export default index