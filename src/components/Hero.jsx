import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>
          A Secure & Transparent<br /> 
          <span className="span-color">Blockchain Voting System</span>
        </h1>
        <p>
          Empowering elections with tamper-proof records, real-time verification, 
          and decentralized trust — built for modern digital democracies.
        </p>
        <div className="hero-buttons">
          <a href="#cta" className="btn btn-primary">Get Started</a>
          <a href="#solution" className="btn btn-secondary">Request a Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
