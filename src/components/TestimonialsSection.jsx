import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Trusted by <span className="span-color">Leaders</span></h2>
          <p>See what our partners say about VoteChain</p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card fade-in">
            <p>"VoteChain revolutionized our student elections. 95% increase in voter turnout!"</p>
            <h4>Dr. Sarah Johnson</h4>
            <small>MIT Student Affairs Director</small>
          </div>
          <div className="testimonial-card fade-in">
            <p>"The transparency and security gave our shareholders complete confidence."</p>
            <h4>Michael Chen</h4>
            <small>TechCorp Board Chairman</small>
          </div>
          <div className="testimonial-card fade-in">
            <p>"Cost savings of 70% while dramatically improving security and trust."</p>
            <h4>Elena Rodriguez</h4>
            <small>City Electoral Commission</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
