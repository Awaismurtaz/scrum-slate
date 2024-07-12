import React from 'react'
import Started from './started'
import Companies from './companies'
import Chart from './chart'
import Features from './features'
import AboutUs from './AboutUs'
import Testimonials from "./Testimonials"
import Update from "./update"
const home = () => {
  return (
    <section>
        <div className='home'>   
          <Started/>
          <Companies/>
          <Chart/>
          <Features/>
          <AboutUs/>
          <Testimonials/>
          <Update/>
        </div>
    </section>
  )
}

export default home