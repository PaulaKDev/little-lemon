import React, { useState } from 'react';
import '../App.css';
import BookingForm from './BookingForm';
import { submitAPI } from '../utils/api';

function BookingPage({ availableTimes, updateTimes }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });
  const [reservationStatus, setReservationStatus] = useState(null);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData(prev => ({
      ...prev,
      date: newDate,
      time: ''
    }));
    updateTimes(newDate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value
    }));
  };

  const handleTimeChange = (e) => handleChange(e);
  const handleGuestsChange = (e) => handleChange(e);
  const handleOccasionChange = (e) => handleChange(e);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.occasion) {
      setReservationStatus('Please complete all fields before submitting.');
      return;
    }

    const success = submitAPI(formData);
    setReservationStatus(
      success
        ? 'Reservation successful!'
        : 'We could not confirm your reservation right now.'
    );
  };

  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <BookingForm
        date={formData.date}
        time={formData.time}
        guests={formData.guests}
        occasion={formData.occasion}
        availableTimes={availableTimes}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
        handleGuestsChange={handleGuestsChange}
        handleOccasionChange={handleOccasionChange}
        handleSubmit={handleSubmit}
      />
      {reservationStatus && <p>{reservationStatus}</p>}
    </section>
  );
}

export default BookingPage;