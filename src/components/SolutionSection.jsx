import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="section-title">
          <h2>Revolutionary Blockchain <span className="span-color">Solution</span></h2>
          <p>Transforming elections with cutting-edge technology</p>
        </div>
        <div className="solution-grid">
          <div className="solution-card fade-in">
            <h3>🔐 Tamper-Proof Security</h3>
            <p>Blockchain-based digital voting system ensures immutable records</p>
          </div>
          <div className="solution-card fade-in">
            <h3>👁️ Complete Transparency</h3>
            <p>End-to-end transparency with verifiable results for all stakeholders</p>
          </div>
          <div className="solution-card fade-in">
            <h3>🔑 Secure Identity</h3>
            <p>Advanced cryptographic verification protects voter identity</p>
          </div>
          <div className="solution-card fade-in">
            <h3>⚡ Fast & Scalable</h3>
            <p>Lightning-fast, cost-effective election management at any scale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
