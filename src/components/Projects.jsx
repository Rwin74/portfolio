import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
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
                                    alt={`${project.title} - Loop Technology Denizli`}
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
                                
                                <Link 
                                    to={`/project/${project.id}`}
                                    className="w-full py-3 px-4 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10"
                                >
                                    {t.projects.btnDetails}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
