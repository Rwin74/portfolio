import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlueprintToggle from './components/BlueprintToggle';

const Campaign = lazy(() => import('./components/Campaign'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Estimator = lazy(() => import('./components/Estimator'));

const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
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
  );
}

export default App;
