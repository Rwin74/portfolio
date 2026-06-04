import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Code2, Activity, Workflow, Globe, Map, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const ProjectModal = ({ project, onClose }) => {
    const { t } = useLanguage();
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-y-auto overflow-x-hidden shadow-2xl"
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all backdrop-blur-md"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Kapak görseli */}
                    <div className="w-full h-64 sm:h-80 relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                        
                        <div className="absolute top-6 left-6 z-10">
                            <span className="px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full shadow-sm">
                                {project.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 space-y-10 relative z-10 -mt-10">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.shortDescription}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                    <Activity className="w-5 h-5 text-gray-400" /> {t.projects.modal.problem}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                    {project.problem}
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                    <Workflow className="w-5 h-5 text-gray-400" /> {t.projects.modal.solution}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                <Code2 className="w-5 h-5 text-gray-400" /> {t.projects.modal.techStack}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 bg-white/5 p-6 rounded-2xl border border-white/5 mt-8">
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Globe className="w-4 h-4 text-gray-400"/> {t.projects.modal.status}</div>
                                <p className="text-gray-400 text-sm">{project.status}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Terminal className="w-4 h-4 text-gray-400"/> {t.projects.modal.impact}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.impact}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="text-white text-sm font-semibold flex items-center gap-2"><Map className="w-4 h-4 text-gray-400"/> {t.projects.modal.nextStep}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.nextStep}</p>
                            </div>
                        </div>

                        {/* Extra Sections Dynamic Rendering */}
                        {project.extraSections && project.extraSections.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-8 mt-8">
                                {project.extraSections.map((section, index) => (
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-2">
                                            <Sparkles className="w-5 h-5 text-primary" /> {section.title}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            {t.projects.title}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl font-light">
                            {t.projects.description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.projects.items.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-white/5">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-white text-black rounded-full shadow-sm">
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                                    {project.shortDescription}
                                </p>
                                
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-2 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded text-gray-400">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                                
                                <button 
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-3 px-4 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10"
                                >
                                    {t.projects.btnDetails}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
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
