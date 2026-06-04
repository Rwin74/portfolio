import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Code2, Palette, Globe, Terminal, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TiltCard = ({ skill, variants }) => {
    return (
        <motion.div
            variants={variants}
            className="relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
        >
            <div>
                <div className="p-2 bg-white/5 rounded-lg w-fit text-gray-300 group-hover:text-primary transition-colors mb-3 group-hover:bg-primary/10">
                    {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">{skill.title}</h3>
                <p className="text-gray-500 text-xs">{skill.desc}</p>
            </div>
            
            {/* Simple Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
        </motion.div>
    );
};

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotateImg = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    const { t } = useLanguage();

    const skillIcons = [
        <Terminal className="w-6 h-6" />,
        <Palette className="w-6 h-6" />,
        <Globe className="w-6 h-6" />,
        <Code2 className="w-6 h-6" />
    ];

    const skills = t.about.skills.map((skill, index) => ({
        ...skill,
        icon: skillIcons[index]
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden" ref={containerRef}>
            {/* Animated Background Orbs */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left side: Premium Image Display */}
                    <div className="relative group perspective-1000 md:pl-10">
                        {/* Glowing backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 blur-3xl transform group-hover:scale-105 transition-transform duration-700" />

                        <motion.div
                            style={{ y: yImg, rotateZ: rotateImg }}
                            className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-primary/50"
                        >
                            <img
                                src="/sad2.webp?v=2"
                                alt="Atakan Yağlı"
                                className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                            />

                            {/* Inner gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Floating Stats Card over Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-gray-400 text-xs font-mono uppercase mb-1">{t.about.codename}</p>
                                    <p className="text-white font-bold flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-primary" />
                                        {t.about.role}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                    <span className="text-primary font-bold">A</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right side: Animated Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative z-10 mt-8 lg:mt-0"
                    >
                        <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6 font-medium tracking-wide">
                            {t.about.badge}
                        </motion.span>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            {t.about.titleLine1} <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-indigo-500">
                                {t.about.titleLine2}
                            </span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed border-l-4 border-primary/30 pl-6">
                            {t.about.description}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 mt-4">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                {t.about.roleBadge1}
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                {t.about.roleBadge2}
                            </span>
                            <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold flex items-center gap-2">
                                <img src="/images/loop-logo.webp" alt="Loop" className="w-4 h-4" />
                                {t.about.roleBadge3}
                            </span>
                        </motion.div>

                        {/* Animated Grid for Skills */}
                        <div
                            style={{ perspective: "1000px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {skills.map((skill, index) => (
                                <TiltCard key={index} skill={skill} variants={itemVariants} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
