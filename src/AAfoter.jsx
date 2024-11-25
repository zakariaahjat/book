import React from 'react'
import './Fotter.css'
import face from './Image/facebook.png'
import insta from "./Image/instagram (1).png"
import x from './Image/twitter.png'

const AAfoter = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>
          We are a company dedicated to providing the best services and products to
          our clients, ensuring top-notch quality and customer satisfaction.
        </p>
      </div>
  
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
  
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@company.com</p>
        <p>Phone: +123 456 7890</p>
        <div class="social-icons">
          <a href="facebook.com"><img src={face} alt="Facebook"/></a>
          <a href="twitter.com"><img src={x} alt="Twitter"/></a>
          <a href="#insta.com"><img src={insta} alt="Instagram"/></a>
          
        </div>
      </div>
    </div>
  
    <div class="footer-bottom">
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </div>
  </footer>
  
  )
}

export default AAfoter
