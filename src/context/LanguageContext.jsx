import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr'); // Default to TR
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('site_lang');
        if (savedLang && (savedLang === 'tr' || savedLang === 'en')) {
            setLanguage(savedLang);
        } else {
            // Check browser language
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('en')) {
                setLanguage('en');
            }
        }
        setIsLoaded(true);
    }, []);

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('site_lang', lang);
    };

    const t = translations[language] || translations['tr'];

    if (!isLoaded) return null; // Wait for initial load to avoid hydration mismatches if any

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
