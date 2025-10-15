import React from 'react';

const SecuritySection = () => {
  return (
    <section className="security">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text1">Security & <span className="span-color">Compliance</span></h2>
          <p>Enterprise-grade security meets regulatory requirements</p>
        </div>
        <div className="solution-grid">
          <div className="solution-card fade-in">
            <h3>🔐 Blockchain Security</h3>
            <p>Immutability and consensus protocols ensure data integrity</p>
          </div>
          <div className="solution-card fade-in">
            <h3>📋 GDPR Compliant</h3>
            <p>Full compliance with data protection regulations</p>
          </div>
          <div className="solution-card fade-in">
            <h3>🔍 Cryptographic Audits</h3>
            <p>Advanced audit mechanisms for complete transparency</p>
          </div>
          <div className="solution-card fade-in">
            <h3>🛡️ Third-Party Audited</h3>
            <p>Regular security audits by independent experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
