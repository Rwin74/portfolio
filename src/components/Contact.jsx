import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Linkedin, Instagram, Sparkles, Send } from 'lucide-react';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
                        <Sparkles className="w-4 h-4" />
                        <span>İletişim & İşbirliği</span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Yeni Projenize <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500">
                            Başlamaya Hazır Mısınız?
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Vizyonunuzu nasıl hayata geçirebileceğimizi konuşalım. Şu anda yenilikçi projeler ve üst düzey danışmanlık için müsaitim.
                    </motion.p>
                </div>

                {/* Contact CTA & Cards Container */}
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

                    {/* Main CTA Card */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/3">
                        <div className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-white/5 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
                            <div className="relative bg-background p-8 rounded-[23px] h-full flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform duration-500 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                    <MessageSquare className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Hızlı İletişim</h3>
                                <p className="text-gray-400 mb-8">Anında dönüş almak ve projenizi hızlandırmak için WhatsApp üzerinden direto ulaşın.</p>

                                <a
                                    href="https://wa.me/905447218974?text=Merhaba%20Atakan,%20projem%20hakkında%20konuşmak%20istiyorum."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg overflow-hidden group/btn w-full justify-center"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Projeni Hayata Geçir
                                        <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Cards Grid */}
                    <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: Mail, title: "E-posta", value: "atakan7495@gmail.com", href: "mailto:atakan7495@gmail.com" },
                            { icon: Phone, title: "Telefon", value: "0544 721 89 74", href: "tel:+905447218974" },
                            { icon: MapPin, title: "Konum", value: "Denizli, Türkiye", href: null },
                            { icon: Linkedin, title: "LinkedIn", value: "Atakan Yağlı", href: "https://www.linkedin.com/in/atakanyagli" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                variants={itemVariants}
                                href={item.href}
                                target={item.href?.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={`relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group ${item.href ? 'cursor-pointer hover:border-primary/50' : 'cursor-default'}`}
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{item.title}</h3>
                                        <p className="text-white font-semibold text-lg group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <footer className="mt-32 max-w-6xl mx-auto border-t border-white/10 pt-10 pb-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-sm font-medium">
                        © {new Date().getFullYear()} Atakan Yağlı. Tüm hakları saklıdır.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/atakanyagli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400"
                            aria-label="LinkedIn Profilimi Görüntüle"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/atakannyagli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400"
                            aria-label="Instagram Profilimi Görüntüle"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
