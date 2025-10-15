import React from 'react';

const ProblemSection = () => {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text1">The Voting <span className="span-color">Crisis</span></h2>
          <p>Traditional voting systems face critical challenges that undermine democracy</p>
        </div>
        <div className="problem-grid">
          <div className="problem-card fade-in">
            <h3>Security Vulnerabilities</h3>
            <p>Traditional voting is prone to tampering, delays, and lack of transparency</p>
          </div>
          <div className="problem-card fade-in">
            <h3>High Costs</h3>
            <p>Expensive election management and result verification processes</p>
          </div>
          <div className="problem-card fade-in">
            <h3>Limited Accessibility</h3>
            <p>Remote voters and differently-abled individuals face barriers</p>
          </div>
          <div className="problem-card fade-in">
            <h3>Trust Issues</h3>
            <p>Public confidence eroded by opaque election processes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
