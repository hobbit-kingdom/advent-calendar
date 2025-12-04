'use client';

import { useState } from 'react';
import styles from './AdventDoor.module.css';
import { AdventDay } from '../data/adventData';
import ImageModal from './ImageModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface AdventDoorProps {
    day: AdventDay;
    isUnlocked: boolean;
    isPast: boolean;
}

export default function AdventDoor({ day, isUnlocked, isPast }: AdventDoorProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    const handleClick = () => {
        if (isUnlocked || isPast) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Check if this day has been opened (for visual preview)
    const showPreview = isPast;

    // Get content based on language
    const title = language === 'ru' ? day.titleRu : day.title;
    const quote = language === 'ru' ? day.quoteRu : day.quote;
    const author = language === 'ru' ? day.authorRu : day.author;

    return (
        <>
            <div
                className={`${styles.doorContainer} ${showPreview ? styles.opened : ''} ${!isUnlocked && !isPast ? styles.locked : ''}`}
                onClick={handleClick}
            >
                <div className={styles.door}>
                    {!showPreview ? (
                        // Closed door
                        <div className={styles.doorFront}>
                            <div className={styles.dayNumber}>{day.day}</div>
                            <div className={styles.ornament}>
                                <div className={styles.ornamentTop}></div>
                                <div className={styles.ornamentCircles}>
                                    <div className={styles.circle}></div>
                                    <div className={styles.circle}></div>
                                    <div className={styles.circle}></div>
                                </div>
                            </div>
                            {!isUnlocked && !isPast && (
                                <div className={styles.lockIcon}>
                                    <div className={styles.lockBody}></div>
                                    <div className={styles.lockShackle}></div>
                                </div>
                            )}
                            {(isUnlocked || isPast) && (
                                <div className={styles.hoverText}>{t.clickToOpen}</div>
                            )}
                        </div>
                    ) : (
                        // Opened door with preview
                        <div className={styles.doorContent}>
                            <div className={styles.dayBadge}>{t.day} {day.day}</div>
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.quotePreview}>"{quote}"</p>
                            <span className={styles.author}>— {author}</span>
                            <div className={styles.viewMore}>{t.clickToView}</div>
                        </div>
                    )}
                </div>
            </div>

            <ImageModal
                day={day}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
