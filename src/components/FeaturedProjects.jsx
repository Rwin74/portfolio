import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const featuredProjects = [
    {
        id: "resq",
        title: "ResQ-72",
        description: "Afet sonrası altyapıdan bağımsız iletişim için mesh tabanlı acil haberleşme sistemi.",
        image: "/project-4.webp",
        colSpan: "col-span-1 md:col-span-7",
        height: "h-[300px] md:h-[350px]",
        status: "Araştırma / Prototip"
    },
    {
        id: "erp",
        title: "Industrial ERP & Warehouse System",
        description: "Üretim ve depo süreçlerini QR, stok takibi ve dijital iş akışlarıyla yöneten sistem.",
        image: "/project-5.webp",
        colSpan: "col-span-1 md:col-span-5",
        height: "h-[300px] md:h-[350px]",
        status: "Geliştirmede"
    },
    {
        id: "petigo",
        title: "Petigo",
        description: "Hayvan sahipleri, veterinerler ve gezdiriciler için geliştirilen pet teknolojisi platformu.",
        image: "/project-3.webp",
        colSpan: "col-span-1 md:col-span-5",
        height: "h-[300px] md:h-[350px]",
        status: "Geliştirmede"
    },
    {
        id: "kampus",
        title: "KampüsOdak",
        description: "Öğrenciler için online kütüphane ve odaklanma platformu.",
        image: "/project-2.webp",
        colSpan: "col-span-1 md:col-span-7",
        height: "h-[300px] md:h-[350px]",
        status: "Yayında"
    },
    {
        id: "qr-pet",
        title: "QR Smart Pet Tag",
        description: "Kayıp hayvanların QR kod ve konum bildirimiyle sahibine ulaşmasını sağlayan sistem.",
        image: "/project-1.webp",
        colSpan: "col-span-1 md:col-span-12",
        height: "h-[300px] md:h-[400px]",
        status: "Prototip"
    }
];

const FeaturedCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        setRotateX(yPct * 10);
        setRotateY(xPct * -10);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className={`${project.colSpan} ${project.height} relative group perspective-1000 w-full cursor-pointer`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                // Navigate to Labs section smoothly
                const element = document.getElementById('labs');
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }}
        >
            <motion.div
                className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0A] transform-style-3d"
                animate={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {/* Glow Behind Image */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />

                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover origin-center z-0 opacity-60 group-hover:opacity-80 transition-opacity"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    loading="lazy"
                />

                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                    <motion.span
                        className="inline-block text-xs font-semibold tracking-wide text-black bg-white px-3 py-1.5 rounded-full shadow-lg"
                        animate={{ y: isHovered ? -3 : 0 }}
                    >
                        {project.status}
                    </motion.span>
                </div>

                {/* Floating Action Button */}
                <motion.div
                    className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white"
                    animate={{
                        scale: isHovered ? 1 : 0.9,
                        backgroundColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)",
                        color: isHovered ? "#000" : "#fff",
                        borderColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)"
                    }}
                >
                    <ArrowUpRight className="w-6 h-6" />
                </motion.div>

                {/* Content Panel */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
                    <div className="overflow-hidden">
                        <motion.h3
                            className="text-3xl font-bold text-white mb-3 tracking-tight"
                            animate={{ y: isHovered ? 0 : 5 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            height: isHovered ? "auto" : 0,
                            marginTop: isHovered ? "8px" : "0px"
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xl font-light">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FeaturedProjects = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const xLeft = useTransform(springScroll, [0, 1], [0, -200]);

    return (
        <section id="featured" className="py-24 relative overflow-hidden" ref={ref}>
            {/* Giant Background Text */}
            <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none opacity-5 select-none z-0">
                <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
                    <span className="text-[12vw] font-black uppercase text-transparent bg-outline-text border-white">
                        ÖNE ÇIKAN PROJELER • ÖNE ÇIKAN PROJELER •
                    </span>
                </motion.div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wider uppercase mb-4 backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5" />
                            Amiral Gemisi
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Öne Çıkan Sistemler
                        </h2>
                    </motion.div>

                    <motion.div
                        className="max-w-md"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            Geliştirdiğim teknolojilerin gücünü ve problem çözme kapasitesini yansıtan seçilmiş ana projeler.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {featuredProjects.map((project, index) => (
                        <FeaturedCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
