import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

// Placeholder pages to implement next
const KnowledgeGraph = React.lazy(() => import('./pages/KnowledgeGraph'));
const LoopDetail = React.lazy(() => import('./pages/LoopDetail'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Research = React.lazy(() => import('./pages/Research'));
const DenizliSeo = React.lazy(() => import('./pages/DenizliSeo'));
const DenizliYazilim = React.lazy(() => import('./pages/DenizliYazilim'));
const DenizliWebSite = React.lazy(() => import('./pages/DenizliWebSite'));

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
      <div className="relative min-h-screen text-foreground selection:bg-primary selection:text-white flex flex-col">
        
        {/* Gemini-style Tech/Galaxy Background */}
        <div className="fixed inset-0 z-0 bg-[#000000] overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent shadow-[0_0_20px_rgba(30,58,138,0.5)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.9)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-900/20 blur-[100px] rounded-[100%]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[20vh] bg-blue-600/10 blur-[80px] rounded-[100%]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Router>
            <div className="flex-grow">
              <React.Suspense fallback={<div className="min-h-screen bg-transparent flex items-center justify-center text-white">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about-atakan-yagli" element={<KnowledgeGraph />} />
                  <Route path="/loop-technology" element={<LoopDetail />} />
                  <Route path="/project/:slug" element={<ProjectDetail />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/denizli-seo" element={<DenizliSeo />} />
                  <Route path="/denizli-yazilim" element={<DenizliYazilim />} />
                  <Route path="/denizli-web-tasarim" element={<DenizliWebSite />} />
                </Routes>
              </React.Suspense>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
