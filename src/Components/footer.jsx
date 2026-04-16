import React from 'react';
import '../Styles/Footer.css';
import { FaHome, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Elegant Palace</h3>
          <p>Discover the finest dining experience with our premium restaurant. Savor exquisite flavors in an elegant atmosphere.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://wa.me/+254714159296" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p><FaHome style={{ marginRight: '0.8rem', color: '#ffd700' }} /> <a href="https://maps.google.com/?Nairobi cbd" target="_blank" rel="noopener noreferrer">Nairobi cbd</a></p>
            <p><FaPhone style={{ marginRight: '0.8rem', color: '#ffd700' }} /> <a href="tel:+254714159296">+254714159296</a></p>
            <p><FaEnvelope style={{ marginRight: '0.8rem', color: '#ffd700' }} /> <a href="mailto:eatcooks@gmail.com">eatcooks@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>| Designed for Premium Dining</p>
      </div>
    </footer>
  );
};

export default Footer;
