import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    // Parallax effect for floating shapes
    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll('.floating-shapes');
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * speed}deg)`;
      });
    };

    window.addEventListener('scroll', handleParallaxScroll);

    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);
};

export default useParallax;
