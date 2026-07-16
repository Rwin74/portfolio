import React from 'react';
import { useLanguage } from '../context/LanguageContext';


const Footer = () => {
    const { t } = useLanguage();
    
    return (
        <footer className="w-full border-t border-white/10 bg-black py-10 mt-auto">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-bold text-lg mb-1">Built by Atakan Yağlı</h4>
                        <p className="text-gray-400 text-sm">Founder of Loop Technology</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right mt-6 md:mt-0">
                        <h4 className="text-white font-semibold mb-2">İletişim & Lokasyon</h4>
                        <address className="text-gray-400 text-sm not-italic space-y-1">
                            <p><strong>Loop Technology - Denizli SEO & Yazılım</strong></p>
                            <p>Telefon: <a href="tel:+905447218974" className="hover:text-white transition-colors">0544 721 89 74</a></p>
                            <p>Adres: <span className="hover:text-white transition-colors">Yenişafak Mah. 1034 Sok. Merkezefendi / Denizli</span></p>
                            <p>E-posta: <a href="mailto:atakan7495@gmail.com" className="hover:text-white transition-colors">atakan7495@gmail.com</a></p>
                        </address>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
