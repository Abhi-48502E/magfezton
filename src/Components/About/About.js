import React from 'react'
import './about.css'
import carr1 from '../../Assets/images/black-orange (8).jpg'
import man from '../../Assets/images/man.jpg'
import man2 from '../../Assets/images/man2.jpg'
import man3 from '../../Assets/images/man3.jpg'



function About() {
  return (
    <div className='main-about'>
      <h1>About Caroxia--</h1>
      <h1>Get Your New Car in 3 Simple Steps</h1>
      <p id='parah'>MyNewCar is an online marketplace to buy, lease or subscribe new cars by connecting buyers to dealers and other channel partner. Compare new car car offers, on-road price & book online with best discount & finance deals. We also provide added services like test drive, insurance, car loan, leasing and car exchange.</p>
<h1>Popular Cars</h1>
<p id='parah'>Best SUV Cars : Hyundai Creta   |   Maruti Vitara Brezza   |   Hyundai Venue   |   Tata Nexon   |   Renault Kiger   |   Mahindra XUV300   |   Tata Harrier   |   Toyota Fortuner
Best Sedan Cars : Maruti Dzire   |   Honda Amaze   |   Honda City   |   Hyundai Verna
Best MPV Cars : Maruti Ertiga   |   Toyota Innova Crysta   |   Renault Triber   |   Maruti XL6
Best Electric Cars : Tata Nexon EV   |   MG ZS EV   |   Mercedes EQC   |   Tata Tigor EV
Best Luxury Cars : Mercedes GLC   |   Mercedes GLE   |   BMW X3   |   Mercedes A Class   |   Mercedes E Class   |   BMW 3 Series   |   Audi A6   |   Volvo XC60
Best Hatchback Cars : Maruti Wagon-R   |   Maruti Swift   |   Maruti Baleno   |   Tata Tiago   |   Tata Altroz   |   Hyundai Grand i10 Nios   |   Hyundai i20   |   Renault Kwid</p>
      <img src={carr1} alt="img" className='joker-img'/>
      <div className="main-contact-box">
        <div className="first-contact-box">
          <h1 className='heading-boxes'>Choose Your New Car</h1>
          <img src={man} alt="img" className='imagez-boxi'/>
          <p className='side-parah' id='parah'>Explore cars by top brands <br />
           from Hatchbacks to Sedans to SUVs to find <br /> a car that best suits your needs</p>
        </div>
        <div className="first-contact-box">
          <h1 className='heading-boxes'>Choose Your New Car</h1>
          <img src={man2} alt="img" className='imagez-boxi'/>
          <p  className='side-parah2' id='parah'>Compare New Car Offers <br />
           from Hatchbacks to Sedans to SUVs to find <br /> a car that best suits your needs</p>
        </div>
        <div className="first-contact-box">
          <h1 className='heading-boxes'>Buy Safely Online With a Click</h1>
          <img src={man3} alt="img" className='imagez-boxi'/>
          <p  className='side-parah3' id='parah'>Book new car by paying <br /> a nominal amount. Buy it outright, take a loan or lease it. Get a door-step delivery or at the showroom.<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About