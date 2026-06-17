import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Nav';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Main />
    </Router>
  );
}

export default App;