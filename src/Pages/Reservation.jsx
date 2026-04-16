import React, { useState } from "react";
import "../Styles/Reservation.css";

function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="reservation-modal">
      <div className="modal-content">
        <h2>Reserve a Table</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your full name" 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your@email.com" 
              required 
            />
          </label>
          <label>
            Date:
            <input 
              type="date" 
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required 
            />
          </label>
          <label>
            Time:
            <input 
              type="time" 
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              required 
            />
          </label>
          <label>
            Number of Guests:
            <input 
              type="number" 
              min="1" 
              max="20" 
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              required 
            />
          </label>
          <button type="submit" className="submit-btn">
            Confirm Reservation
          </button>
        </form>
        <button 
          className="close-btn" 
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Reservation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="reservation-page">
      {/* Hero Section */}
      <section className="reservation-hero">
        <h1>Book Your Table</h1>
        <p>Reserve your spot for an unforgettable dining experience at our award-winning restaurant</p>
        <button 
          onClick={() => setShowModal(true)} 
          className="hero-reserve-btn"
        >
          Reserve Now
        </button>
      </section>

      {/* Content Section */}
      <div className="reservation-content">
        <h2>Why Book With Us?</h2>
        <div className="reservation-info">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <h3>Instant Confirmation</h3>
            <p>Get immediate confirmation for your reservation. No waiting, no phone calls.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">👥</div>
            <h3>Up to 20 Guests</h3>
            <p>Perfect for intimate dinners or private celebrations with friends and family.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>24/7 Availability</h3>
            <p>Book anytime, day or night. We're ready to serve you whenever you're hungry.</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to dine with us?</h2>
          <button 
            onClick={() => setShowModal(true)} 
            className="page-reserve-btn"
          >
            Make Reservation
          </button>
        </div>
      </div>

      {/* Modal */}
      <ReservationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

