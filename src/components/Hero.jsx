import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    return (
        <section id="hero" ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
            {/* Clean Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px] opacity-20 mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="text-left order-2 lg:order-1 pt-8 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 font-medium tracking-wide backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {t.hero.badge}
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-8 leading-[1.1] text-white"
                    >
                        {t.hero.titleLine1}
                        <span className="block text-gray-500 mt-2">{t.hero.titleLine2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 font-light"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a 
                            href="#projects" 
                            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200"
                        >
                            {t.hero.btnProjects}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a 
                            href="#contact" 
                            className="flex items-center justify-center px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-colors hover:bg-white/10 backdrop-blur-sm"
                        >
                            {t.hero.btnContact}
                        </a>
                    </motion.div>
                </div>

                {/* Minimalist Image Section */}
                <motion.div
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                    style={{ y: y2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />
                        <img
                            src="/sad.webp?v=2"
                            alt="Atakan Yağlı - Teknoloji İnovatörü"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
                            fetchPriority="high"
                            loading="eager"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

