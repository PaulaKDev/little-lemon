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
  handleSubmit,
  errors
}) {
  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h2>Book Now</h2>

      {/* DATE */}
      <div className="form-group">
        <label>Choose date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          className={errors?.date ? 'error-input' : ''}
          required
        />
        {errors?.date && <span className="error-text">Please select a date</span>}
      </div>

      {/* TIME */}
      <div className="form-group">
        <label>Choose time</label>
        <select
          name="time"
          value={time}
          onChange={handleTimeChange}
          className={errors?.time ? 'error-input' : ''}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors?.time && <span className="error-text">Please select a time</span>}
      </div>

      {/* GUESTS */}
      <div className="form-group">
        <label>Number of guests</label>
        <input
          type="number"
          name="guests"
          min="1"
          max="40"
          value={guests}
          onChange={handleGuestsChange}
          className={errors?.guests ? 'error-input' : ''}
          required
        />
        {errors?.guests && <span className="error-text">Enter valid number (1–40)</span>}
      </div>

      {/* OCCASION */}
      <div className="form-group">
        <label>Occasion</label>
        <select
          name="occasion"
          value={occasion}
          onChange={handleOccasionChange}
          className={errors?.occasion ? 'error-input' : ''}
          required
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors?.occasion && <span className="error-text">Please select an occasion</span>}
      </div>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;