import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const Campaign = lazy(() => import('./components/Campaign'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Estimator = lazy(() => import('./components/Estimator'));
const Marketplace = lazy(() => import('./components/Marketplace'));
const Contact = lazy(() => import('./components/Contact'));
import BlueprintToggle from './components/BlueprintToggle';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay loading below-the-fold chunks to prioritize Hero paint (LCP)
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 500); // 500ms is enough to let the Hero image download

    const handleInteraction = () => {
      setIsMounted(true);
    };

    // Also mount immediately on user interaction
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('mousemove', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
        <Hero />

        {/* Suspense boundary for lazy loaded sections */}
        {isMounted && (
          <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-primary/50 animate-pulse">Yüklenecek Bölümler Hazırlanıyor...</div>}>
            <Campaign />
            <Projects />
            <About />
            <Estimator />
            <Marketplace />
            <Contact />
          </Suspense>
        )}
      </main>
      <BlueprintToggle />
    </div>
  );
}

export default App;
