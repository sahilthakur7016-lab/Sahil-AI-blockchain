import React, { useEffect } from 'react';
import useAnimations from '../hooks/useAnimations';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import UseCasesSection from '../components/UseCasesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SecuritySection from '../components/SecuritySection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const SolutionPage = () => {
  useAnimations();

  useEffect(() => {
    // Scroll to solution section after component mounts
    const timer = setTimeout(() => {
      const solutionElement = document.getElementById('solution');
      if (solutionElement) {
        solutionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <UseCasesSection />
      <HowItWorksSection />
      <SecuritySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default SolutionPage;
