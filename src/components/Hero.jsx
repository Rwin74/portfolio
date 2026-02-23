import React, { useState, useEffect, Suspense } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Particles from './3d/Particles';

const GlitchText = ({ text }) => {
    return (
        <span className="relative inline-block overflow-hidden">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
            >
                <span className="inline-block">{text}</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-2 md:w-3 h-8 md:h-12 bg-primary ml-2 mb-2"
                />
            </motion.span>
        </span>
    );
};

const SpotlightButton = ({ href, defaultText, revealText, isPrimary }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <a
            href={href}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden px-8 py-3 rounded-full font-semibold transition-colors duration-300 text-center flex-1 sm:flex-none ${isPrimary ? 'bg-white text-black' : 'bg-white/5 border border-white/10 text-white backdrop-blur-sm'
                }`}
        >
            <span className="relative z-10">{defaultText}</span>
            <div
                className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none ${isPrimary ? 'bg-primary text-white' : 'bg-white text-black'
                    }`}
                style={{
                    opacity,
                    WebkitMaskImage: `radial-gradient(circle 50px at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
                    maskImage: `radial-gradient(circle 50px at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
                    transition: 'opacity 0.2s ease',
                }}
            >
                <span className={`font-bold tracking-widest text-sm uppercase`}>
                    {revealText}
                </span>
            </div>
        </a>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">

            {/* Dynamic Background Elements - Cleaned up circles */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-float opacity-30 mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-float opacity-20 mix-blend-screen" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 z-0 opacity-40">
                    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                        <Suspense fallback={null}>
                            <Particles count={700} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-left order-2 md:order-1">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-primary mb-6 font-medium tracking-wide backdrop-blur-md"
                    >
                        Dijital Zanaatkar
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] min-h-[120px]" aria-label="Dijital Gerçekliği Kodluyorum.">
                        <GlitchText text="Dijital Gerçekliği" />
                        <br />
                        <span className="text-gray-500 block text-3xl md:text-5xl mt-4">Kodluyorum.</span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-10 border-l-2 border-primary/50 pl-6"
                    >
                        Uzman Yazılım Geliştirici & Dijital Yönetim Uzmanı. Sürükleyici web deneyimleri oluşturmak için teknik hassasiyeti sanatsal vizyonla birleştiriyorum.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 1 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <SpotlightButton href="#projects" defaultText="Projelerimi Gör" revealText="Her Zaman" isPrimary={true} />
                        <SpotlightButton href="#contact" defaultText="İletişime Geç" revealText="En İyisi" isPrimary={false} />
                    </motion.div>
                </div>

                {/* Image Section - Circles removed */}
                <motion.div
                    className="relative order-1 md:order-2 flex justify-center perspective-1000"
                    style={{ y: y2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />

                        <img
                            src="/sad.webp?v=2"
                            alt="Atakan Yağlı - Uzman Yazılım Geliştirici ve Dijital Yönetim Uzmanı"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
                            fetchPriority="high"
                            decoding="async"
                        />

                        {/* Floating Overlay Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 z-30 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">Mevcut Durum</p>
                                    <p className="text-sm font-semibold text-white flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        Projeye Açık
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-white">%100</p>
                                    <p className="text-[10px] text-gray-400">Adanmışlık</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
