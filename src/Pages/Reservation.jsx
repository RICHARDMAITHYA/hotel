import React, { useState } from "react";
import axios from 'axios';
import "../Styles/Reservation.css";

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const response = await axios.post('http://localhost/hotel/reserve.php', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data.success) {
        setMessage(response.data.message);
        setMessageType('success');
        setFormData({ name: '', email: '', date: '', time: '', guests: '' });
      } else {
        setMessage(response.data.message || 'Submission failed');
        setMessageType('error');
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message || 'Network error. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reservation-page">
      <div className="form-container">
        <h2>Make a Reservation</h2>
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label htmlFor="date">Date</label>
              <input 
                type="date" 
                id="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input 
                type="time" 
                id="time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <label htmlFor="guests">Number of Guests</label>
          <input 
            type="number" 
            id="guests" 
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1" 
            placeholder="Number of guests" 
            required 
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Reserving...' : 'Reserve Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;

