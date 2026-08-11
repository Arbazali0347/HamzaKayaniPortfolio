import React from 'react'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import ShortAbout from '../components/ShortAbout'
import FounderSection from '../components/FounderSection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Showcase/>
        <WhyChooseUs/>
        <FounderSection/>
        <ShortAbout/>
        <Testimonials/>
    </div>
  )
}

export default Home