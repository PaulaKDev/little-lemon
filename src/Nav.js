import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './Assets/logo.png';

function Nav() {
  return (
    <header className="nav-header">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Little Lemon logo" className="logo" />
        </div>

        {/* Navegación */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/specials">Specials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Book a Table</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Nav;