import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const BrandName = () => {
    const name = "AtakanYağlı";
    return (
        <a
            href="/"
            className="relative group cursor-pointer pointer-events-auto block"
            onClick={(e) => {
                if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }}
            aria-label="Atakan Yağlı Portfolyo - Ana Sayfaya Git"
        >
            <h1 className="sr-only">Atakan Yağlı - Uzman Yazılım Geliştirici & Dijital Yönetim Uzmanı</h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1 font-mono font-bold text-lg md:text-xl tracking-tighter"
            >
                <span className="text-primary transition-transform group-hover:-translate-x-1 duration-300">&lt;</span>
                <span className="text-white flex relative">
                    {name.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.05), duration: 0.2 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </span>
                <span className="text-primary transition-transform group-hover:translate-x-1 duration-300">/&gt;</span>
            </motion.div>
        </a>
    );
};

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();
    
    return (
        <div className="pointer-events-auto flex items-center bg-white/5 border border-white/10 rounded-full p-1 shadow-lg backdrop-blur-md">
            <button 
                onClick={() => toggleLanguage('tr')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === 'tr' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
            >
                TR
            </button>
            <button 
                onClick={() => toggleLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === 'en' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
            >
                EN
            </button>
        </div>
    );
};

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const handleScroll = (e, id) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-3 md:py-6 pointer-events-none"
        >
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3 md:gap-0 max-w-7xl mx-auto w-full">
                <div className="flex-1 min-w-[120px] flex justify-start">
                    <BrandName />
                </div>

                <nav className="order-last md:order-none w-full md:w-auto pointer-events-auto bg-white/5 border border-white/10 rounded-full px-3 md:px-6 py-2 md:py-3 flex justify-center gap-3 md:gap-6 items-center shadow-lg backdrop-blur-md">
                    <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="inline-block p-1 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">{t.nav.home}</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="inline-block p-1 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">{t.nav.projects}</a>
                    <a href="#loop" onClick={(e) => handleScroll(e, 'loop')} className="inline-block p-1 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">{t.nav.loop}</a>
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="inline-block p-1 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">{t.nav.about}</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="inline-block p-1 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">{t.nav.contact}</a>
                </nav>

                <div className="flex-1 flex justify-end min-w-[120px]">
                    <LanguageSwitcher />
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
