import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#"><FaFacebook /> </a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
            </div>
            <div className="col">
              <h2>Company info</h2>
              <ul>
                
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">we are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col">
              <h2>Feature</h2>
              <ul>
                <li>Business Marketing</li>
                <li>User Analyic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div className="col">
              <h2>Resources</h2>
              <ul>
                <li>Ios & andriod</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>ApI</li>
              </ul>
            </div>
        </div>
        <div className="copyright">
        <p>&copy;2025 | All The Right reserved made by <a href="#">Khaled Elabyed</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer