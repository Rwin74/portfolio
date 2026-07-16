import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import { Link } from 'react-router-dom';

const Projects = lazy(() => import('../components/Projects'));
const Loop = lazy(() => import('../components/Loop'));
const Timeline = lazy(() => import('../components/Timeline'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    try { return !sessionStorage.getItem('preloader_shown'); } catch (e) { return true; }
  });

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
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100000] origin-left drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 space-y-32 pb-20">
          
          {/* SEO Hidden H1 - Anahtar Kelime Hedeflemesi İçin (Sayfa akışını bozmamak adına Screen Reader Only (sr-only) veya tasarımın bir parçası yapılabilir, biz burada göze batmayan bir tasarım yapıyoruz) */}
          <div className="pt-32 text-center -mb-20">
             <h1 className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto">
                Denizli'nin Yenilikçi <Link to="/denizli-yazilim" className="text-blue-400 hover:underline">Yazılım</Link> ve <Link to="/denizli-seo" className="text-blue-400 hover:underline">SEO</Link> Ajansı | Atakan Yağlı & Loop Technology
             </h1>
             <p className="text-sm text-gray-600 mt-2">
                Profesyonel <Link to="/denizli-web-tasarim" className="hover:underline">Denizli web tasarım</Link> ve dijital dönüşüm hizmetleri.
             </p>
          </div>

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
    </>
  );
}

export default HomePage;
