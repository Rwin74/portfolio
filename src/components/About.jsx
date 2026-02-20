import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Globe, Terminal, Sparkles } from 'lucide-react';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotateImg = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    const skills = [
        { icon: <Terminal className="w-6 h-6" />, title: "Geliştirme", desc: "React, Node.js, Python" },
        { icon: <Palette className="w-6 h-6" />, title: "Tasarım", desc: "UI/UX, Figma, 3D" },
        { icon: <Globe className="w-6 h-6" />, title: "Strateji", desc: "SEO, Büyüme" },
        { icon: <Code2 className="w-6 h-6" />, title: "Mimari", desc: "Ölçeklenebilir Sistemler" }
    ];

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
                    <div className="relative group perspective-1000 pl-4 md:pl-10">
                        {/* Glowing backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 blur-3xl transform group-hover:scale-105 transition-transform duration-700" />

                        <motion.div
                            style={{ y: yImg, rotateZ: rotateImg }}
                            className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-primary/50"
                        >
                            <img
                                src="/sad2.jpg"
                                alt="Atakan Yağlı"
                                className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                                onError={(e) => { e.target.src = '/sad2.jpeg' }} // Fallback in case they use JPEG
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
                                    <p className="text-gray-400 text-xs font-mono uppercase mb-1">Kod Adı</p>
                                    <p className="text-white font-bold flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-primary" />
                                        Dijital Zanaatkar
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
                        className="relative z-10"
                    >
                        <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6 font-medium tracking-wide">
                            Hakkımda
                        </motion.span>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            Tasarım & Mühendislik <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-indigo-500">
                                Arasındaki Köprü
                            </span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed border-l-4 border-primary/30 pl-6">
                            Sadece işlevsel değil, aynı zamanda görsel olarak da büyüleyici dijital deneyimler yaratma tutkusu olan bir yazılım geliştiricisiyim. Hem geliştirme hem de dijital yönetim alanındaki yılların deneyimiyle, her projeye benzersiz ve kusursuz bir bakış açısı getiriyorum.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex gap-8 mb-12">
                            <div className="flex flex-col">
                                <span className="text-4xl lg:text-5xl font-bold text-white mb-2">5+</span>
                                <span className="text-sm tracking-widest text-gray-500 uppercase">Yıllık<br />Deneyim</span>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</span>
                                <span className="text-sm tracking-widest text-gray-500 uppercase">Başarılı<br />Proje</span>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl lg:text-5xl font-bold text-white mb-2">%100</span>
                                <span className="text-sm tracking-widest text-gray-500 uppercase">Proje<br />Adanmışlığı</span>
                            </div>
                        </motion.div>

                        {/* Animated Grid for Skills */}
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="p-2 bg-white/5 rounded-lg w-fit text-gray-300 group-hover:text-primary transition-colors mb-3 group-hover:bg-primary/10">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-1 text-white">{skill.title}</h3>
                                    <p className="text-gray-500 text-xs">{skill.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
