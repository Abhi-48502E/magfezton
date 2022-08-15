import React from 'react'
import './mycom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import bann from '../../Assets/images/red-car.jpg'
import bann2 from '../../Assets/images/purple-car.jpg'
import bann3 from '../../Assets/images/blue-car3.jpg'
import bann4 from '../../Assets/images/blue-car.jpg'
import bann5 from '../../Assets/images/black-orange (6).jpg'
import bann6 from '../../Assets/images/black-orange (7).jpg'







function CarouselResponsive() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            id='banner-img'
            src={bann}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src={bann2}
            id="banner-img2"
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={bann3}
            id="banner-img3"
            alt="Third slide"
          />
          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            id='banner-img'
            src={bann4}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            id='banner-img'
            src={bann5}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            id='banner-img'
            src={bann6}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default CarouselResponsive