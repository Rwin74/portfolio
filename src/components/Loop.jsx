import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Loop = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="loop" ref={sectionRef} className="pt-20 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <img src="/images/loop-logo.webp" alt="Loop Technology Logo" className="w-12 h-12 object-contain" />
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{t.loop.title}</h2>
                    </div>
                    <p className="text-xl text-primary font-medium mb-4">{t.loop.subtitle}</p>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        {t.loop.description}
                    </p>
                </motion.div>

                <div className="space-y-6 mb-20">
                    {t.loop.focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors group"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                            <p className="text-gray-400 mb-4">{area.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {area.projects.map((project, pIndex) => {
                                    // Make projects link to their modals or anchor links semantically
                                    const projectId = project.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                    return (
                                        <a 
                                            href={`#projects`} 
                                            key={pIndex} 
                                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                                        >
                                            {project}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{t.loop.visionTitle}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10 font-medium">
                        "{t.loop.visionText1}"
                    </p>
                    <p className="text-gray-400 relative z-10">
                        {t.loop.visionText2}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Loop;
