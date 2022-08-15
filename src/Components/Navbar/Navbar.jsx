import React from 'react'
import './navbar.css'
import '../../App.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      CAROXIA
    </div>
    
  </div>

  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to="/">HOME</Link>
    <Link to="/contact">CONTACT</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/signup">SIGN-UP</Link>
    <Link to="/">BUY/LATEST</Link>
  </div>
</div>
<input type="text" placeholder='Search for cars..' className='search-bar' />
<button className='search-btn'>Search</button>
<Outlet />
    </div>
  )
}

export default Navbar