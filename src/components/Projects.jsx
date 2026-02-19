import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Seat & Eat",
        category: "Mobil Uygulama",
        description: "Restoranların boş masalarını müşterilerin görmesi ve rezervasyon yapması için geliştirilen yenilikçi bir platform.",
        image: "/project-4.png"
    },
    {
        id: 2,
        title: "Prive English",
        category: "Web Sitesi",
        description: "İngilizce özel ders almak isteyen öğrenciler için geliştirilen, eğitmenlerle buluşmayı sağlayan profesyonel web platformu.",
        image: "/project-3.png"
    },
    {
        id: 3,
        title: "Petshop Stok",
        category: "Otomasyon",
        description: "Özelleştirilebilir barkod sistemi ve stok takibi ile işletmeler için kapsamlı stok yönetim otomasyonu.",
        image: "/project-5.png"
    },
    {
        id: 4,
        title: "KampüsOdak",
        category: "Eğitim Platformu",
        description: "Öğrencilere online kütüphane ve odaklanma özellikleri sunan, birlikte çalışma imkanı sağlayan web uygulaması.",
        image: "/project-2.png"
    },
    {
        id: 5,
        title: "Bi'Torun",
        category: "Sosyal Sorumluluk",
        description: "Yaşlı bakım öğrencileri ve yaşlı bireyleri bir araya getiren, teknoloji desteği sağlayan sosyal girişim projesi.",
        image: "/project-1.png"
    }
];

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-card-bg border border-white/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <img
                src={project.image}
                alt={`${project.title} - ${project.category} Projesi`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-300 border border-white/20 px-2 py-1 rounded-full backdrop-blur-md">
                        {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                        {project.title}
                    </h3>
                    <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                        className="text-gray-300 text-sm overflow-hidden"
                    >
                        {project.description}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Portfolyo</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Seçilmiş İşler</h2>
                </motion.div>

                <motion.p
                    className="text-gray-400 max-w-md mt-4 md:mt-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Tasarım ve teknolojinin sınırlarını zorlayan projelerden bir seçki.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
