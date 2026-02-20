import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const BrandName = () => {
        const name = "AtakanYağlı";
        return (
            <div className="relative group cursor-pointer pointer-events-auto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
            </div>
        );
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-3 md:py-6 gap-3 md:gap-0 pointer-events-none"
        >
            <BrandName />

            <nav className="pointer-events-auto bg-white/5 border border-white/10 rounded-full px-3 md:px-6 py-2 md:py-3 flex gap-3 md:gap-6 items-center shadow-lg backdrop-blur-md">
                <a href="#hero" className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">Ana Sayfa</a>
                <a href="#projects" className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">Projeler</a>
                <a href="#about" className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">Hakkımda</a>
                <a href="#contact" className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">İletişim</a>
            </nav>

            {/* Empty div for balancing if needed, or maybe a small CTA later */}
            <div className="hidden md:block w-32"></div>
        </motion.header>
    );
};

export default Navbar;
