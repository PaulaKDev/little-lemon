/* global fetchAPI */  // Importa la función de la API

import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import { fetchAPI, submitAPI } from './utils/api';
import './App.css';

// Función para inicializar el estado de availableTimes
const initializeTimes = () => {
  const today =new Date().toISOString().split('T')[0];
  return window.fetchAPI ? window.fetchAPI(today) : [];
};

// Función reductora para manejar el estado de availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload; // Actualiza con los nuevos horarios
    default:
      return state;
  }
};

function Main() {
  // Usar useReducer para manejar el estado de availableTimes
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  // Función para actualizar las horas disponibles
 const updateTimes = async (date) => {
    const availableTimes = await fetchAPI(date); // Llamar a la API con la nueva fecha
    dispatch({ type: 'UPDATE_TIMES', payload: availableTimes }); // Despachar la acción para actualizar el estado
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
      </Routes>
    </main>
  );
}

export default Main;