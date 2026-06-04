import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

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

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Rwin74" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/atakanyagli" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/atakanyagli" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://atakanyagli.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="Website">
                            <Globe className="w-5 h-5" />
                        </a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
