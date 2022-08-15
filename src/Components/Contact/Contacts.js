import React from 'react'
import './contacts.css'

import purple from '../../Assets/images/purple-car.jpg'
function Contacts() {
  return (
    <div className='main-contacts'>
      <img src={purple} alt="contact-img" className='contact-img' />
      <div class="container-division">
        <form id="contact" action="" method="post">
          <h3>Contact Form</h3>
          <h4>Contact us today, and get reply with in 24 hours!</h4>
          <fieldset>
            <input placeholder="Full Name" type="text" tabindex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Email Address" type="email" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Phone Number" type="tel" tabindex="3" required />
          </fieldset>
          <fieldset>
            <input placeholder="Web Site (starting with http://)" id="website" type="url" tabindex="4" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send now</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contacts