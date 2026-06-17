import React from 'react';
import '../App.css';

function BookingForm({
  date,
  time,
  guests,
  occasion,
  availableTimes,
  handleDateChange,
  handleTimeChange,
  handleGuestsChange,
  handleOccasionChange,
  handleSubmit
}) {
  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Now</h2>

      <div className="form-group">
        <label>Choose date</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Choose time</label>
        <select
          name="time"
          value={time}
          onChange={handleTimeChange}
          required
        >
        <option value="">Select time</option>
          {availableTimes.map((t) => (
        <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Number of guests</label>
        <input
          type="number"
          name="guests"
          min="1"
          max="40"
          value={guests}
          onChange={handleGuestsChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Occasion</label>
        <select 
          name="occasion" 
          value={occasion} 
          onChange={handleOccasionChange}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;