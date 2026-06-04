import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Stethoscope, PawPrint, Sparkles, X, ExternalLink, Code2 } from 'lucide-react';

const labs = [
    {
        id: "emergency",
        title: "Emergency Lab",
        description: "Afet iletişim sistemleri, acil durum teknolojileri ve dayanıklılık sistemleri.",
        icon: Activity,
        status: "Aktif",
        statusColor: "bg-red-500",
        projectCount: 2,
        color: "from-red-500/20 to-orange-500/5",
        border: "group-hover:border-red-500/50",
        projects: [
            {
                title: "KampüsOdak",
                description: "Öğrencilere online kütüphane ve odaklanma özellikleri sunan web uygulaması.",
                techStack: ["React", "Node.js", "MongoDB"],
                problem: "Öğrencilerin uzaktan eğitim sürecinde odaklanma ve motivasyon eksikliği yaşaması.",
                impact: "10.000+ aktif kullanıcı, %40 oranında artan çalışma verimliliği.",
                image: "/project-2.webp",
                status: "Yayında"
            }
        ]
    },
    {
        id: "industrial",
        title: "Industrial Lab",
        description: "ERP sistemleri, envanter takibi, QR iş akışları ve endüstriyel otomasyon.",
        icon: Cpu,
        status: "Geliştirmede",
        statusColor: "bg-blue-500",
        projectCount: 3,
        color: "from-blue-500/20 to-cyan-500/5",
        border: "group-hover:border-blue-500/50",
        projects: [
            {
                title: "Petshop Stok",
                description: "İşletmeler için kapsamlı stok yönetim otomasyonu ve analiz sistemi.",
                techStack: ["React", "Express", "PostgreSQL", "Prisma"],
                problem: "Manuel stok takibinin yarattığı zaman kaybı ve hata payı.",
                impact: "Stok hatalarında %90 azalma, operasyonel hızda 3 kat artış.",
                image: "/project-5.webp",
                status: "Canlı"
            }
        ]
    },
    {
        id: "health",
        title: "Health Lab",
        description: "Bilgisayarlı görü, hayati belirti izleme ve sağlık teknolojisi konseptleri.",
        icon: Stethoscope,
        status: "Araştırma",
        statusColor: "bg-green-500",
        projectCount: 1,
        color: "from-green-500/20 to-emerald-500/5",
        border: "group-hover:border-green-500/50",
        projects: [
            {
                title: "Bi'Torun",
                description: "Yaşlı bakım öğrencileri ve yaşlı bireyleri bir araya getiren sosyal girişim projesi.",
                techStack: ["React Native", "Firebase"],
                problem: "Yaşlı bireylerin sosyal izolasyonu ve öğrencilerin pratik eksikliği.",
                impact: "500+ başarılı eşleşme, sosyal sorumluluk ödülü.",
                image: "/project-1.webp",
                status: "Beta"
            }
        ]
    },
    {
        id: "pet",
        title: "Pet Tech Lab",
        description: "Evcil hayvan platformları, QR kimlik sistemleri ve hayvan odaklı ürünler.",
        icon: PawPrint,
        status: "Aktif",
        statusColor: "bg-purple-500",
        projectCount: 2,
        color: "from-purple-500/20 to-fuchsia-500/5",
        border: "group-hover:border-purple-500/50",
        projects: [
            {
                title: "Prive English",
                description: "İngilizce özel ders almak isteyen öğrenciler için profesyonel web platformu. (Eğitim Teknolojisi örneği olarak entegre edilmiştir)",
                techStack: ["Next.js", "Tailwind CSS", "Stripe"],
                problem: "Öğrenci ve eğitmenlerin güvenilir bir platformda buluşamaması.",
                impact: "Aylık 100+ ders rezervasyonu.",
                image: "/project-3.webp",
                status: "Yayında"
            }
        ]
    },
    {
        id: "future",
        title: "Future Concepts Lab",
        description: "Deneysel fikirler, araştırma projeleri ve uzun vadeli teknoloji konseptleri.",
        icon: Sparkles,
        status: "Konsept",
        statusColor: "bg-amber-500",
        projectCount: 4,
        color: "from-amber-500/20 to-yellow-500/5",
        border: "group-hover:border-amber-500/50",
        projects: [
            {
                title: "Seat & Eat",
                description: "Restoranların boş masalarını müşterilerin görmesi ve rezervasyon yapması için geliştirilen yenilikçi bir platform.",
                techStack: ["React", "Node.js", "Socket.io"],
                problem: "Restoranlardaki anlık masa doluluk oranının dışarıdan bilinememesi.",
                impact: "Bekleme sürelerinde %30 azalma.",
                image: "/project-4.webp",
                status: "Ar-Ge"
            }
        ]
    }
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
                
                <motion.div 
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-y-auto overflow-x-hidden shadow-2xl"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all backdrop-blur-md"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="w-full h-64 sm:h-80 relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                        
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                            <span className="px-3 py-1 text-xs font-semibold bg-white text-black rounded-full">
                                {project.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 space-y-8">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                    <Code2 className="w-5 h-5 text-gray-400" /> Teknoloji Yığını
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                    <Activity className="w-5 h-5 text-gray-400" /> Etki
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                    {project.impact}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                <ExternalLink className="w-5 h-5 text-gray-400" /> Çözülen Problem
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.problem}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Laboratuvarlar
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl font-light">
                            İnovasyon kategorilerini temsil eden araştırma ve geliştirme laboratuvarları.
                        </p>
                    </motion.div>
                </div>

                {/* Labs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {labs.map((lab, index) => (
                        <motion.div
                            key={lab.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 ${lab.border} transition-all duration-500 overflow-hidden cursor-pointer`}
                            onClick={() => setSelectedProject(lab.projects[0])}
                        >
                            {/* Background Gradient Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                                        <lab.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 backdrop-blur-md">
                                        <span className={`w-1.5 h-1.5 rounded-full ${lab.statusColor} animate-pulse`} />
                                        {lab.status}
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{lab.title}</h3>
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-gray-300">
                                            {lab.projectCount} Proje
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                                        {lab.description}
                                    </p>
                                    
                                    <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors gap-2">
                                        Projeleri Gör <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};

export default Projects;
