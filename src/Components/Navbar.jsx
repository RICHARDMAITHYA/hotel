import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/zz.png';
import '../Styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Cooks Logo" className="logo" />
      </Link>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/menu" className="nav-link" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/reservations" className="nav-link" onClick={() => setIsOpen(false)}>Reservations</Link></li>
        <li><Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
