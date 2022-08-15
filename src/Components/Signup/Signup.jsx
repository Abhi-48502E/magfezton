import React from 'react'
import './signup.css'
import purple from '../../Assets/images/purple-car.jpg'


function Signup() {
  return (
    <div>
            <img src={purple} alt="contact-img" className='contact-imgz' />

<div class="wrapper">
    <h1>Login</h1>
    <p>Welcome </p>
    <form>
      <input type="text" placeholder="Enter username"/>
      <input type="password" placeholder="Password"/>
      <p class="recover">
        <a>Recover Password</a>
      </p>
    </form>
    <button className='btnz'>Sign in</button>
    <p class="or">
      ----- or continue with -----
    </p>
    <div class="icons">
      <i class="fab fa-google"></i>
      <i class="fab fa-facebook"></i>
    </div>
    <div class="not-member">
      Not a member? <a>Register Now</a>
    </div>
  </div>

    </div>
  )
}

export default Signup