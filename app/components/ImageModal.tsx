'use client';

import { useEffect } from 'react';
import styles from './ImageModal.module.css';
import { AdventDay } from '../data/adventData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface ImageModalProps {
    day: AdventDay;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageModal({ day, isOpen, onClose }: ImageModalProps) {
    const { language } = useLanguage();
    const t = translations[language];

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Get content based on language
    const title = language === 'ru' ? day.titleRu : day.title;
    const quote = language === 'ru' ? day.quoteRu : day.quote;
    const author = language === 'ru' ? day.authorRu : day.author;
    const content = language === 'ru' ? day.contentRu : day.content;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ✕
                </button>

                <div className={styles.imageContainer}>
                    <img
                        src={`/days/${day.day}.jpg`}
                        alt={title}
                        className={styles.image}
                        onError={(e) => {
                            // Fallback if image doesn't exist
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.dayBadge}>{t.day} {day.day}</div>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.quote}>
                        <p className={styles.quoteText}>"{quote}"</p>
                        <span className={styles.author}>— {author}</span>
                    </div>
                    <p className={styles.description}>{content}</p>
                    <div className={styles.stars}>
                        {[...Array(7)].map((_, i) => (
                            <span key={i} className={styles.star} style={{ animationDelay: `${i * 0.15}s` }}>✦</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
