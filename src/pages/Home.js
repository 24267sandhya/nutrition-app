import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Advertisement from '../components/Advertisement'
import LatestArticlesCard from '../components/LatestArticlesCard'
import FeatureCards from '../components/FeatureCards'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <HowItWorks/>
        <Advertisement/>
        <Footer/>
    </>
  )
}

export default Home