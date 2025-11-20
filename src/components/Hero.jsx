import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>
          The Future of Voting:<br />
          <span className="span-color">Secure. Transparent. Blockchain-Powered.</span>
        </h1>
        <p>
          Experience a next-generation voting platform designed to eliminate fraud, ensure
          transparency, and build trust through decentralized blockchain technology.
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
