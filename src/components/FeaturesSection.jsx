import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text1">Powerful Features</h2>
          <p>Advanced technology stack for secure, transparent voting</p>
        </div>
        <div className="features-grid">
          <div className="feature-card fade-in">
            <div className="feature-icon">🔗</div>
            <h3>Decentralized Ledger</h3>
            <p>Immutable record of every vote stored across distributed nodes</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🔒</div>
            <h3>End-to-End Encryption</h3>
            <p>Military-grade encryption ensures complete voter anonymity</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🛡️</div>
            <h3>Multi-Factor Authentication</h3>
            <p>Secure and verified access with multiple identity checks</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">📊</div>
            <h3>Transparency Dashboard</h3>
            <p>Real-time vote count monitoring and live result tracking</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">📝</div>
            <h3>Smart Contracts</h3>
            <p>Automated tallying and result publishing without human intervention</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">🔍</div>
            <h3>Complete Audit Trail</h3>
            <p>Publicly verifiable and traceable system for full accountability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
