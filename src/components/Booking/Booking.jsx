/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import './booking.css';

const Booking = () => (
  <div className="card">
    <div className="box">
      <div className="content">
        <h2>Animal Name</h2>
        <h3>Animal Type</h3>
        <div className="date">
          <p>Checkin date</p>
          <p>Checkout date</p>
        </div>
        <button type="submit">Cancel Reservation</button>
      </div>
    </div>
  </div>
);

export default Booking;
