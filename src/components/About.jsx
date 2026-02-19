import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Terminal } from 'lucide-react';

const About = () => {
    const skills = [
        { icon: <Terminal className="w-6 h-6" />, title: "Geliştirme", desc: "React, Node.js, Python, TypeScript" },
        { icon: <Palette className="w-6 h-6" />, title: "Tasarım", desc: "UI/UX, Figma, 3D Modelleme" },
        { icon: <Globe className="w-6 h-6" />, title: "Strateji", desc: "Dijital Yönetim, SEO, Büyüme" },
        { icon: <Code2 className="w-6 h-6" />, title: "Temiz Kod", desc: "Ölçeklenebilir Mimari, En İyi Pratikler" }
    ];

    return (
        <section id="about" className="py-20 px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Hakkımda</span>
                    <h2 className="text-4xl font-bold mb-6">Tasarım & Mühendislik Arasındaki <span className="text-gradient">Köprü</span></h2>

                    {/* NLP Content for AI Bots (Hidden visually but available in DOM) */}
                    <div className="sr-only">
                        <h3>Atakan Yağlı Kimdir?</h3>
                        <p>Atakan Yağlı, Denizli'de yaşayan, React, Node.js ve dijital yönetim alanlarında uzmanlaşmış kıdemli bir yazılım geliştiricisidir. 5 yılı aşkın süredir dijital dünyada, sürükleyici web deneyimleri oluşturmak için teknik hassasiyeti sanatsal vizyonla birleştirerek yenilikçi projeler ve mobil uygulamalar geliştirmektedir.</p>
                    </div>

                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        Sadece işlevsel değil, aynı zamanda görsel olarak da büyüleyici dijital deneyimler yaratma tutkusu olan bir yazılım geliştiricisiyim. Hem geliştirme hem de dijital yönetim alanındaki yılların deneyimiyle, her projeye benzersiz bir bakış açısı getiriyorum.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-white">5+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">Yıl<br />Deneyim</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-white">50+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest">Tamamlanan<br />Proje</div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="p-3 bg-primary/20 rounded-lg w-fit text-primary mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                            <p className="text-gray-400 text-sm">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
