import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlueprintToggle from './components/BlueprintToggle';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

const Campaign = lazy(() => import('./components/Campaign'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Estimator = lazy(() => import('./components/Estimator'));

const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    if (!isLoading) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoading]);

  return (
    <>
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
