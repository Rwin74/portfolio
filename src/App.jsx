import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to reduce unused JS and TBT
const Campaign = lazy(() => import('./components/Campaign'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
        <Hero />

        {/* Suspense boundary for lazy loaded sections */}
        <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-primary/50 animate-pulse">Yükleniyor...</div>}>
          <Campaign />
          <Projects />
          <About />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
