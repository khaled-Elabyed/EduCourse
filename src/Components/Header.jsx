import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Header = () => {
  return (
    <header id='header'>
      <nav className='navbar'>
        <a className='logo' href="#">EduCourse</a>
        <ul id='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#"> Contact</a></li>
        </ul>
        <div className="account">
          <a className='login' href="#" >Login </a>
          <a className='btn-join' href="#">Join Us <FaArrowRight /></a>
        </div>
      </nav>
    </header>
  )
}

export default Header