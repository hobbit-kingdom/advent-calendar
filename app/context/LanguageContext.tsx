'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    // Load saved language preference on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('advent-calendar-language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ru')) {
            setLanguage(savedLanguage);
        }
        setMounted(true);
    }, []);

    // Save language preference when it changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('advent-calendar-language', language);
        }
    }, [language, mounted]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ru' : 'en');
    };



    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
