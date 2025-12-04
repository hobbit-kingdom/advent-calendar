export const translations = {
    en: {
        titleMain: "Baggins journey",
        titleSub: "Advent Calendar",
        subtitle: "It's winter in Hobbiton! Enjoy the journey of Bilbo Baggins and some surprises!",
        today: "Today:",
        december: "December",
        clickToOpen: "Click to open",
        clickToView: "Click to view ✦",
        day: "Day",
        daysUnlocked: "Days Unlocked:",
        returnDaily: "Return each day for a new surprise!",
        footerQuote: "Even the smallest person can change the course of the future.",
        footerAuthor: "Galadriel"
    },
    ru: {
        titleMain: "Путешествие Бэггинса",
        titleSub: "Адвент-календарь",
        subtitle: "Зима в Хоббитоне! Наслаждайтесь путешествием Бильбо Бэггинса и сюрпризами!",
        today: "Сегодня:",
        december: "декабря",
        clickToOpen: "Нажмите, чтобы открыть",
        clickToView: "Нажмите для просмотра ✦",
        day: "День",
        daysUnlocked: "Дней открыто:",
        returnDaily: "Возвращайтесь каждый день за новым сюрпризом!",
        footerQuote: "Даже самый маленький человек может изменить ход будущего.",
        footerAuthor: "Галадриэль"
    }
} as const;

export type TranslationKey = keyof typeof translations.en;
