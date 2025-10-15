import React from 'react';
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

const HomePage = () => {
  useAnimations();

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

export default HomePage;
