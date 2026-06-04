import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CircleDot } from 'lucide-react';

const timelineData = [
    {
        year: "2024",
        title: "Erken Yazılım Projeleri",
        description: "Temel yazılım sistemleri, web platformları ve ilk bağımsız projeler.",
    },
    {
        year: "2025",
        title: "Ürün Geliştirme",
        description: "Son kullanıcı odaklı dijital ürünler, SaaS çözümleri ve mobil uygulamalar.",
    },
    {
        year: "2026",
        title: "İleri Teknoloji & Sistemler",
        description: "ERP sistemleri, acil durum teknolojileri, endüstriyel otomasyon ve yapay zeka entegrasyonları.",
        active: true
    },
    {
        year: "2027+",
        title: "Gelecek Teknolojileri",
        description: "Deneysel araştırma, otonom sistemler ve uzun vadeli teknoloji konseptleri.",
        isFuture: true
    }
];

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex items-center justify-between md:justify-normal w-full mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Center Timeline Node */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-background border-4 border-[#0A0A0A] rounded-full z-10">
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${item.active ? 'bg-primary animate-pulse' : (item.isFuture ? 'bg-gray-600' : 'bg-white')}`} />
            </div>

            {/* Content Side */}
            <div className={`w-[85%] md:w-5/12 ml-auto md:ml-0 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] shadow-xl group hover:border-white/20 transition-all ${item.active ? 'border-primary/30 shadow-primary/5' : ''}`}
                >
                    <span className={`inline-block px-3 py-1 mb-4 text-sm font-mono rounded-full border ${item.active ? 'border-primary/50 text-primary bg-primary/10' : (item.isFuture ? 'border-gray-700 text-gray-500 bg-gray-900/50' : 'border-white/20 text-white bg-white/5')}`}>
                        {item.year}
                    </span>
                    <h3 className={`text-2xl font-bold mb-3 ${item.isFuture ? 'text-gray-400' : 'text-white'}`}>
                        {item.title}
                    </h3>
                    <p className={`leading-relaxed font-light ${item.isFuture ? 'text-gray-600' : 'text-gray-400'}`}>
                        {item.description}
                    </p>
                    
                    {/* Active glow */}
                    {item.active && (
                        <div className="absolute inset-0 bg-primary/5 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                </motion.div>
            </div>
            
            {/* Empty space for the other side on desktop */}
            <div className="hidden md:block w-5/12" />
        </div>
    );
};

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Evrim Süreci
                        </h2>
                        <p className="text-gray-400 text-lg font-light">
                            Basit web projelerinden, karmaşık endüstriyel sistemlere ve geleceğin teknolojilerine uzanan yolculuk.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Background Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
                    
                    {/* Animated Progress Line */}
                    <motion.div 
                        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-indigo-500 to-transparent origin-top"
                        style={{ scaleY }}
                    />

                    <div className="relative z-10 pt-8">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
