import React from 'react'
import SplineDesign from '../Api/SplineDesign'
import BackgroundImg from '../Background/BackgroundImg'
import CarouselSlider from '../Carousel/MyCom'
import Footer from '../Footer/Footer'


import './home.css'

function Home() {
 
  return (
    <div>
      <BackgroundImg/>
      <h1>New Cars in India 2022</h1>
      <p id='parah'>Caroxia brings a complete range of cars in India. Search cars by applying filters such as by price range, by transmission type, by bodytype, by brand, by engine cc, and more features. Also, stay updated with upcoming cars in India, compare four-wheelers in your price range and stay tuned to the latest car news.</p>
      <CarouselSlider/>
      <SplineDesign/>
      <Footer/>
  </div>
  )
}

export default Home
