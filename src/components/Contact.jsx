import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">İletişim</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Yeni Projenize Başlamaya Hazır mısınız?</h2>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    Vizyonunuzu nasıl hayata geçirebileceğimizi konuşalım. Şu anda freelance projeler ve danışmanlık için müsaitim.
                </p>

                <a
                    href="https://wa.me/905447218974?text=Merhaba%20Atakan,%20projem%20hakkında%20konuşmak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-lg shadow-green-500/20"
                >
                    <MessageSquare className="w-5 h-5" />
                    Projeni Hayata Geçir 🚀
                </a>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">E-posta</h3>
                        <p className="text-gray-400">atakan7495@gmail.com</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Konum</h3>
                        <p className="text-gray-400">Denizli, Türkiye</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-primary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Telefon</h3>
                        <p className="text-gray-400">0544 721 89 74</p>
                    </div>
                </div>
            </motion.div>

            <footer className="mt-32 border-t border-white/10 pt-8 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://www.linkedin.com/in/atakanyagli" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all group">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/atakannyagli" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all group">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Atakan. Tüm hakları saklıdır.</p>
            </footer>
        </section>
    );
};

export default Contact;
