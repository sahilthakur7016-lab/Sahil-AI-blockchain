import { useEffect } from 'react';

const useAnimations = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Problem cards animation with delay
    const problemCards = document.querySelectorAll('.problem-card');
    const problemObserver = new IntersectionObserver(function(entries) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 200);
        }
      });
    }, observerOptions);

    problemCards.forEach(card => {
      problemObserver.observe(card);
    });

    return () => {
      observer.disconnect();
      problemObserver.disconnect();
    };
  }, []);
};

export default useAnimations;
