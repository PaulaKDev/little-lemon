import React from 'react';
import '../App.css';
import img from '../Assets/restauranfood1.png';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">

        {/* Texto */}
        <div className="cta-content-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <button>Reserve a Table</button>
        </div>

        {/* Imagen */}
        
        <div className="cta-image">
          <img src={img} alt="Restaurant food" />
        </div>

      </div>
    </section>
  );
}

export default CallToAction;