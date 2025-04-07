import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import HeroSection from '../HeroSection/heroSection'
import ProductsSection from '../ProductsSection/productsSection'
function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <ProductsSection/>
        <Footer/>
    </>
  )
}

export default Home
