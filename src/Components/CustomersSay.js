import React from 'react';
import '../App.css';
import customer1 from '../Assets/cliente1.jpg';
import customer2 from '../Assets/cliente2.jpg';
import customer3 from '../Assets/cliente3.jpg';
import customer4 from '../Assets/cliente4.jpg';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Jane', rating: 5, image: customer1, review: 'Great food & service!' },
    { id: 2, name: 'Hassan', rating: 4, image: customer2, review: 'Nice atmosphere.' },
    { id: 3, name: 'Santa', rating: 5, image: customer3, review: 'Excellent service!' },
    { id: 4, name: 'Jose', rating: 4, image: customer4, review: 'Loved the desserts!' },
  ];

  return (
    <section className="customers-say">
      <div className="customers-say-header">
        <h2>Testimonials</h2>
      </div>

      
<div className="testimonials-list">
  {testimonials.map((testimonial) => (
    <div className="testimonial-item" key={testimonial.id}>

      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="testimonial-image"
      />

      <h3>{testimonial.name}</h3>

      <span>{'⭐'.repeat(testimonial.rating)}</span>

      <p>{testimonial.review}</p>

    </div>
  ))}
</div>

    </section>
  );
}

export default CustomersSay;
