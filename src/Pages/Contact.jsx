import React from "react";
import "../Styles/Footer.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="footer-section" style={{ marginBottom: '3rem' }}>
        <h3>Contact Info</h3>
        <div className="contact-info">
          <p><FaMapMarkerAlt style={{ marginRight: '0.8rem', color: '#ffd700' }} /> <a href="https://maps.google.com/?q=123+Gourmet+Street,+Food+City,+FC+12345" target="_blank" rel="noopener noreferrer">Nairobi cbd</a></p>
          <p><FaPhone style={{ marginRight: '0.8rem', color: '#ffd700' }} /> <a href="tel:+15551234567">+254714159296</a></p>
          <p><FaEnvelope style={{ marginRight: '0.8rem', color: '#ffd700' }} /> <a href="mailto:info@elegantpalace.com">eatcooks@gmail.com.com</a></p>
        </div>
      </div>
    </div>
  );
}
