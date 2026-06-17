import React, { useState } from 'react';
import '../App.css';
import BookingForm from './BookingForm';
import { submitAPI } from '../utils/api';

function BookingPage({ availableTimes, updateTimes }) {

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const [reservationStatus, setReservationStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // ✅ CAMBIO DE FECHA
  const handleDateChange = (e) => {
    const newDate = e.target.value;

    setFormData(prev => ({
      ...prev,
      date: newDate,
      time: ''
    }));
    

    updateTimes(newDate);

    //limpiar error de fecha
    setErrors(prev => ({
      ...prev,
      date: false
    }));
  };

  // ✅ CAMBIOS GENERALES
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value
    }));
    
// ✅ LIMPIAR ERROR DE ESE CAMPO
  setErrors(prev => ({
    ...prev,
    [name]: false
  }));
};


  const handleTimeChange = (e) => handleChange(e);
  const handleGuestsChange = (e) => handleChange(e);
  const handleOccasionChange = (e) => handleChange(e);

  // ✅ SUBMIT + VALIDACIÓN
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.date) newErrors.date = true;
    if (!formData.time) newErrors.time = true;
    if (!formData.guests || formData.guests < 1) newErrors.guests = true;
    if (!formData.occasion) newErrors.occasion = true;

    setErrors(newErrors);

    // ❌ Si hay errores → parar
    if (Object.keys(newErrors).length > 0) {
      setReservationStatus('error');
      return;
    }

    // ✅ Simulación API
    const success = submitAPI(formData);

    setReservationStatus(success ? 'success' : 'error');

    // ✅ Limpiar formulario si éxito
    if (success) {
      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
      });
    }
  };

  return (
    <section className="booking-section">

      <h2 className="booking-title">Book a Table</h2>

      <div className="booking-card">

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
          errors={errors}
        />

        {/* ✅ MENSAJE PRO */}
        {reservationStatus && (
          <div className={`reservation-status ${reservationStatus}`}>
            
            {reservationStatus === 'success' ? (
              <div className="success-box">
                <div className="checkmark">✅</div>
                <h3>Reservation Confirmed!</h3>
                <p>Your table has been successfully booked.</p>
              </div>
            ) : (
              <p>❌ Please complete all fields correctly.</p>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default BookingPage;
