'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            className={styles.toggleButton}
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Russian' : 'Switch to English'}
        >
            <span className={`${styles.flag} ${language === 'en' ? styles.active : ''}`}>
                EN
            </span>
            <span className={styles.divider}>|</span>
            <span className={`${styles.flag} ${language === 'ru' ? styles.active : ''}`}>
                RU
            </span>
        </button>
    );
}
