import React from 'react';

const UseCasesSection = () => {
  return (
    <section className="use-cases">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text1">Versatile <span className="span-color">Applications</span></h2>
          <p>Perfect for elections of all sizes and types</p>
        </div>
        <div className="use-case-grid">
          <div className="use-case-card fade-in">
            <h3>🏛️ Government Elections</h3>
            <p>National & state elections</p>
          </div>
          <div className="use-case-card fade-in">
            <h3>🎓 Educational Institutions</h3>
            <p>University/student body elections</p>
          </div>
          <div className="use-case-card fade-in">
            <h3>🏢 Corporate Governance</h3>
            <p>Board voting and shareholder decisions</p>
          </div>
          <div className="use-case-card fade-in">
            <h3>📊 Surveys & Polls</h3>
            <p>Trustless polling systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
