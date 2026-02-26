import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Seat & Eat",
        category: "Mobil Uygulama",
        description: "Restoranların boş masalarını müşterilerin görmesi ve rezervasyon yapması için geliştirilen yenilikçi bir platform.",
        image: "/project-4.webp",
        colSpan: "col-span-1 md:col-span-7",
        height: "h-[300px] md:h-[350px]"
    },
    {
        id: 2,
        title: "Prive English",
        category: "Web Sitesi",
        description: "İngilizce özel ders almak isteyen öğrenciler için profesyonel web platformu.",
        image: "/project-3.webp",
        colSpan: "col-span-1 md:col-span-5",
        height: "h-[300px] md:h-[350px]"
    },
    {
        id: 3,
        title: "Petshop Stok",
        category: "Otomasyon",
        description: "İşletmeler için kapsamlı stok yönetim otomasyonu ve analiz sistemi.",
        image: "/project-5.webp",
        colSpan: "col-span-1 md:col-span-5",
        height: "h-[300px] md:h-[350px]"
    },
    {
        id: 4,
        title: "KampüsOdak",
        category: "Eğitim Platformu",
        description: "Öğrencilere online kütüphane ve odaklanma özellikleri sunan web uygulaması.",
        image: "/project-2.webp",
        colSpan: "col-span-1 md:col-span-7",
        height: "h-[300px] md:h-[350px]"
    },
    {
        id: 5,
        title: "Bi'Torun",
        category: "Sosyal Sorumluluk",
        description: "Yaşlı bakım öğrencileri ve yaşlı bireyleri bir araya getiren sosyal girişim projesi.",
        image: "/project-1.webp",
        colSpan: "col-span-1 md:col-span-12",
        height: "h-[300px] md:h-[400px]"
    }
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Hover Effect Physics
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        setRotateX(yPct * 10); // max 10 deg tilt (reduced from 15 for stability)
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
            className={`${project.colSpan} ${project.height} relative group perspective-1000 w-full`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-card-bg transform-style-3d cursor-pointer"
                animate={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {/* Glowing Aura Behind Image */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />

                {/* Main Image */}
                <motion.img
                    src={project.image}
                    alt={`${project.title} Projesi`}
                    className="absolute inset-0 w-full h-full object-cover origin-center z-0"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    loading="lazy"
                    decoding="async"
                />

                {/* Gradient Overlays for better text readability */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

                {/* Top Category Badge */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20">
                    <motion.span
                        className="inline-block text-[10px] md:text-xs font-mono uppercase tracking-wider text-white border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40"
                        animate={{ y: isHovered ? -3 : 0 }}
                    >
                        {project.category}
                    </motion.span>
                </div>

                {/* Floating Action Button */}
                <motion.div
                    className="absolute top-4 md:top-6 right-4 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white"
                    aria-label={`${project.title} projesini görüntüle`}
                    role="button"
                    tabIndex={0}
                    animate={{
                        scale: isHovered ? 1 : 0.9,
                        backgroundColor: isHovered ? "rgba(var(--primary-rgb), 0.9)" : "rgba(255,255,255,0.1)",
                        borderColor: isHovered ? "var(--primary-color)" : "rgba(255,255,255,0.2)"
                    }}
                >
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>

                {/* Content Panel (Slides up gracefully) */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 z-20 flex flex-col justify-end h-full">
                    <div className="overflow-hidden">
                        <motion.h3
                            className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-md"
                            animate={{ y: isHovered ? 0 : 10 }}
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
                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed border-l-2 border-primary/50 pl-3 md:pl-4 drop-shadow-md">
                            {project.description}
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Light Reflection */}
                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    animate={{
                        x: isHovered ? ["-100%", "100%"] : "-100%",
                        opacity: isHovered ? [0, 1, 0] : 0
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    // Parallax setup for the title section
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Create a smooth spring animation for the marquee text
    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const xLeft = useTransform(springScroll, [0, 1], [0, -200]);

    return (
        <section id="projects" className="py-20 md:py-24 relative overflow-hidden" ref={ref}>

            {/* Giant Background Text / Marquee effect */}
            <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none opacity-5 select-none z-0">
                <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
                    <span className="text-[12vw] font-black uppercase text-transparent bg-outline-text border-white">
                        DIGITAL PORTFOLIO • DIGITAL PORTFOLIO •
                    </span>
                </motion.div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wider uppercase mb-4 backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5" />
                            Portfolyo
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Seçilmiş <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">İşler</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="max-w-md"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-primary/30 pl-4">
                            Tasarım ve teknolojinin sınırlarını zorlayan, markalara dijital dünyada seviye atlatan amiral gemisi projelerden bir seçki.
                        </p>
                    </motion.div>
                </div>

                {/* Asymmetric Project Grid - Fixed overlapping and improved responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
