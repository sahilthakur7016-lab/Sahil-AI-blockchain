import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-title">
          <h2>Transformative <span className="span-color">Benefits</span></h2>
          <p>Experience the future of democratic participation</p>
        </div>
        <div className="solution-grid">
          <div className="solution-card fade-in">
            <h3>🚫 Eliminate Fraud</h3>
            <p>Completely eliminate vote manipulation and fraud attempts</p>
          </div>
          <div className="solution-card fade-in">
            <h3>📱 Increase Turnout</h3>
            <p>Boost participation with remote and mobile voting access</p>
          </div>
          <div className="solution-card fade-in">
            <h3>✅ Build Trust</h3>
            <p>Restore confidence with verifiable and transparent outcomes</p>
          </div>
          <div className="solution-card fade-in">
            <h3>💰 Save Costs</h3>
            <p>Dramatically reduce administrative complexity and expenses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
