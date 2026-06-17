import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import { fetchAPI } from './utils/api';
import './App.css';

const initializeTimes = () => fetchAPI(new Date());

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    const nextDate = date ? new Date(date) : new Date();
    const nextTimes = fetchAPI(nextDate);
    dispatch({ type: 'UPDATE_TIMES', payload: nextTimes });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />}
        />
      </Routes>
    </main>
  );
}

export default Main;