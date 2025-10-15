import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SolutionPage from './pages/SolutionPage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import DemoPage from './pages/DemoPage';
import NotFoundPage from './pages/NotFoundPage';
import useParallax from './hooks/useParallax';

function App() {
  const [scrolled, setScrolled] = useState(false);
  useParallax();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <div className="App">
        <BackgroundAnimation />
        <Navigation scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
