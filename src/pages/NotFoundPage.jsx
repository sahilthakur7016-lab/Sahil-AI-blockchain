import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="cta" style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="section-title">
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
        </div>
        
        <div className="cta-buttons">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/demo" className="btn btn-secondary">
            Request Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
