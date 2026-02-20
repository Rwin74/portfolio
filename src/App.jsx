import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Campaign from './components/Campaign';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
        <Hero />
        <Campaign />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
