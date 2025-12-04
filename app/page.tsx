'use client';

import { useMemo } from 'react';
import styles from './page.module.css';
import AdventDoor from './components/AdventDoor';
import { adventDays } from './data/adventData';

export default function Home() {
    // Current date - December 4th, 2025
    const currentDate = useMemo(() => {
        return new Date('2025-12-04T11:30:00+02:00');
    }, []);

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // 0-indexed

    // Determine if a day is unlocked
    const isDayUnlocked = (day: number) => {
        // Only unlock in December
        if (currentMonth !== 12) return false;
        // Unlock on the day or after
        return day <= currentDay;
    };

    return (
        <main className={styles.main}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>
                        <span className={styles.titleMain}>Baggins journey</span>
                        <span className={styles.titleSub}>Advent Calendar</span>
                    </h1>
                    <p className={styles.subtitle}>
                        It's winter in Hobbiton! Enjoy the journey of Bilbo Baggins and some surprises!
                    </p>
                    <div className={styles.currentDate}>
                        <span className={styles.dateLabel}>Today:</span>
                        <span className={styles.dateValue}>December {currentDay}, 2025</span>
                    </div>
                </div>
                <div className={styles.ornamentalLine}>
                    <div className={styles.ornament}>✦</div>
                    <div className={styles.line}></div>
                    <div className={styles.ornament}>⚔</div>
                    <div className={styles.line}></div>
                    <div className={styles.ornament}>✦</div>
                </div>
            </header>

            {/* Calendar Grid */}
            <div className={styles.calendarContainer}>
                <div className={styles.calendar}>
                    {adventDays.map((day) => (
                        <AdventDoor
                            key={day.day}
                            day={day}
                            isUnlocked={isDayUnlocked(day.day)}
                            isPast={day.day < currentDay}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerQuote}>
                    <p className={styles.quoteText}>
                        "Even the smallest person can change the course of the future."
                    </p>
                    <p className={styles.quoteAuthor}>— Galadriel</p>
                </div>
                <div className={styles.footerInfo}>
                    <p>Days Unlocked: {currentDay} / 24</p>
                    <p>Return each day for a new surprise!</p>
                </div>
            </footer>

            {/* Background Effects */}
            <div className={styles.backgroundEffects}>
                <div className={styles.stars}>
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className={styles.star}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
