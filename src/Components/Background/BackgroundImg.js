import React from 'react'
import car from '../../Assets/images/blue-car.jpg'
import './background-img.css'
function BackgroundImg() {
  return (
    <div className='main-txt-container'>
      <img src={car} alt="" className='blue-car' />
      <div class="container">
        <ul class="dynamic-txt">
          <li><span>EXPLORE</span></li>
          <li><span>CAROXIA</span></li>
        </ul>
      </div>
    </div>
  )
}
export default BackgroundImg