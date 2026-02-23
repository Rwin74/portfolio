import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlueprintToggle from './components/BlueprintToggle';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
const MatrixRain = lazy(() => import('./components/MatrixRain'));

const Campaign = lazy(() => import('./components/Campaign'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Estimator = lazy(() => import('./components/Estimator'));

const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [matrixMode, setMatrixMode] = useState(false);

  // Scroll Progress Implementation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
    if (!isLoading) {
      document.body.style.overflow = matrixMode ? 'hidden' : 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading, matrixMode]);

  useEffect(() => {
    let keyBuffer = '';
    let idleTimer;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      if (!isLoading && !matrixMode) {
        idleTimer = setTimeout(() => {
          setMatrixMode(true);
        }, 120000); // Trigger after 2 minutes of idle time instead of 30s to avoid annoying users
      }
    };

    const handleKeyDown = (e) => {
      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 6) {
        keyBuffer = keyBuffer.slice(-6);
      }
      if (keyBuffer === 'hacker') {
        setMatrixMode(true);
      }
      resetIdleTimer();
    };

    const handleUserActivity = () => {
      resetIdleTimer();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);

    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
    };
  }, [isLoading, matrixMode]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100000] origin-left drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />
      {matrixMode && (
        <Suspense fallback={null}>
          <MatrixRain active={matrixMode} onClose={() => setMatrixMode(false)} />
        </Suspense>
      )}
      <CustomCursor />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`bg-background min-h-screen text-foreground selection:bg-primary selection:text-white transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
          <Hero />
          {isMounted && (
            <Suspense fallback={<div>Loading...</div>}>
              <Campaign />
              <Projects />
              <About />
              <Estimator />

              <Contact />
            </Suspense>
          )}
        </main>
        <BlueprintToggle />
      </div>
    </>
  );
}

export default App;
