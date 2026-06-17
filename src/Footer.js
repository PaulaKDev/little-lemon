import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './App.css';
import logo from './Assets/logo2.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon logo" />
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
