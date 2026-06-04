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


                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
