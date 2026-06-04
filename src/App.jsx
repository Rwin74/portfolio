import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import { LanguageProvider } from './context/LanguageContext';
const Projects = lazy(() => import('./components/Projects'));
const Loop = lazy(() => import('./components/Loop'));
const Timeline = lazy(() => import('./components/Timeline'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isMounted, setIsMounted] = useState(false);
  // Skip preloader on return visits within the same session
  const [isLoading, setIsLoading] = useState(() => {
    try { return !sessionStorage.getItem('preloader_shown'); } catch (e) { return true; }
  });

  // Scroll Progress Implementation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);



  return (
    <LanguageProvider>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100000] origin-left drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`bg-background min-h-screen text-foreground selection:bg-primary selection:text-white transition-opacity duration-1000 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
          <Hero />
          {isMounted && (
            <Suspense fallback={<div>Loading...</div>}>
              <Projects />
              <Loop />
              <Timeline />
              <About />
              <Contact />
            </Suspense>
          )}
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
