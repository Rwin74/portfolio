import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Seat & Eat",
        category: "Mobil Uygulama",
        description: "Restoranların boş masalarını müşterilerin görmesi ve rezervasyon yapması için geliştirilen yenilikçi bir platform.",
        image: "/project-4.png",
        colSpan: "col-span-12 md:col-span-7", // Large left
        height: "h-[450px]"
    },
    {
        id: 2,
        title: "Prive English",
        category: "Web Sitesi",
        description: "İngilizce özel ders almak isteyen öğrenciler için profesyonel web platformu.",
        image: "/project-3.png",
        colSpan: "col-span-12 md:col-span-5", // Small right
        height: "h-[450px] md:mt-24" // Parallax offset
    },
    {
        id: 3,
        title: "Petshop Stok",
        category: "Otomasyon",
        description: "İşletmeler için kapsamlı stok yönetim otomasyonu ve analiz sistemi.",
        image: "/project-5.png",
        colSpan: "col-span-12 md:col-span-5", // Small left
        height: "h-[450px]"
    },
    {
        id: 4,
        title: "KampüsOdak",
        category: "Eğitim Platformu",
        description: "Öğrencilere online kütüphane ve odaklanma özellikleri sunan web uygulaması.",
        image: "/project-2.png",
        colSpan: "col-span-12 md:col-span-7", // Large right
        height: "h-[450px] md:-mt-24" // Parallax offset pull up
    },
    {
        id: 5,
        title: "Bi'Torun",
        category: "Sosyal Sorumluluk",
        description: "Yaşlı bakım öğrencileri ve yaşlı bireyleri bir araya getiren sosyal girişim projesi.",
        image: "/project-1.png",
        colSpan: "col-span-12", // Full width footer project
        height: "h-[500px]"
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

        setRotateX(yPct * 15); // max 15 deg tilt
        setRotateY(xPct * -15);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (index % 2) * 0.2 }}
            className={`${project.colSpan} ${project.height} relative group perspective-1000`}
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
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                {/* Main Image */}
                <motion.img
                    src={project.image}
                    alt={`${project.title} Projesi`}
                    className="absolute inset-0 w-full h-full object-cover origin-center"
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                    <motion.span
                        className="inline-block text-xs font-mono uppercase tracking-wider text-white border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/20"
                        animate={{ y: isHovered ? -5 : 0 }}
                    >
                        {project.category}
                    </motion.span>
                </div>

                {/* Floating Action Button */}
                <motion.div
                    className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white"
                    animate={{
                        scale: isHovered ? 1 : 0.8,
                        backgroundColor: isHovered ? "rgba(var(--primary-rgb), 0.8)" : "rgba(255,255,255,0.1)",
                        borderColor: isHovered ? "var(--primary-color)" : "rgba(255,255,255,0.2)"
                    }}
                >
                    <ArrowUpRight className="w-6 h-6" />
                </motion.div>

                {/* Content Panel (Slides up gracefully) */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
                    <div className="overflow-hidden">
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold text-white mb-3"
                            animate={{ y: isHovered ? 0 : 20 }}
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
                            marginTop: isHovered ? "12px" : "0px"
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-primary/50 pl-4">
                            {project.description}
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Light Reflection */}
                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"
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
    const xLeft = useTransform(springScroll, [0, 1], [0, -400]);
    const xRight = useTransform(springScroll, [0, 1], [-400, 0]);

    return (
        <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>

            {/* Giant Background Text / Marquee effect */}
            <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none opacity-5 select-none z-0">
                <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
                    <span className="text-[15vw] font-black uppercase text-transparent bg-outline-text border-white">
                        DIGITAL PORTFOLIO • DIGITAL PORTFOLIO •
                    </span>
                </motion.div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wider uppercase mb-4 backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5" />
                            Portfolyo
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Seçilmiş <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">İşler</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="max-w-md"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-primary/30 pl-4">
                            Tasarım ve teknolojinin sınırlarını zorlayan, markalara dijital dünyada seviye atlatan amiral gemisi projelerden bir seçki.
                        </p>
                    </motion.div>
                </div>

                {/* Asymmetric Project Grid */}
                <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-20"
                >
                    <a href="https://github.com/Rwin74" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden flex items-center gap-3 backdrop-blur-md">
                        <span className="relative z-10 text-white font-semibold">Tüm Arşivi İncele (GitHub)</span>
                        <ArrowUpRight className="w-5 h-5 relative z-10 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
