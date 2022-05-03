import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import FR from './translations/fr';
import EN from './translations/en';
import AR from './translations/ar';
import PL from './translations/pl';
import LanguageKey from "./types/language-key";

function getLocale(): LanguageKey {
    const defaultLocale = 'fr';
    const { href } = window.location;
    const split = href.split("/").pop();

    if (split && ["en", "fr", "ar", "pl"].includes(split)) {
        return split as LanguageKey;
    }

    return defaultLocale;
};

i18next.use(initReactI18next).init({
    resources: {
        ar: {
            translation: AR,
        },
        en: {
            translation: EN,
        },
        fr: {
            translation: FR,
        },
        pl: {
            translation: PL,
        },
    },
    lng: getLocale(),
});

export default i18next;
