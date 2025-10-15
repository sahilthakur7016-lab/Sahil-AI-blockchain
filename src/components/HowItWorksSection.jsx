import React from 'react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It <span className="span-color">Works</span></h2>
          <p>Simple, secure, and transparent voting process</p>
        </div>
        <div className="steps-container">
          <div className="step fade-in">
            <div className="step-number">1</div>
            <h3>Register & Verify</h3>
            <p>Voter registers and identity is securely verified</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">2</div>
            <h3>Receive Key</h3>
            <p>Voter receives unique blockchain authentication key</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">3</div>
            <h3>Cast Vote</h3>
            <p>Vote cast digitally with full encryption and anonymity</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">4</div>
            <h3>Record Immutably</h3>
            <p>Vote permanently recorded on blockchain ledger</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">6</div>
            <h3>Verify Results</h3>
            <p>Final tally is transparent and publicly verifiable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
