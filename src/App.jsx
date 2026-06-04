import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

// Placeholder pages to implement next
const KnowledgeGraph = React.lazy(() => import('./pages/KnowledgeGraph'));
const LoopDetail = React.lazy(() => import('./pages/LoopDetail'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Research = React.lazy(() => import('./pages/Research'));

function App() {
  return (
    <LanguageProvider>
      <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white flex flex-col">
        <Router>
          <div className="flex-grow">
            <React.Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-atakan-yagli" element={<KnowledgeGraph />} />
                <Route path="/loop-technology" element={<LoopDetail />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
                <Route path="/research" element={<Research />} />
              </Routes>
            </React.Suspense>
          </div>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
