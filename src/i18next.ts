import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import FR from './translations/fr';

i18next.use(initReactI18next).init({
    resources: {
        ar: {
            translation: FR,
        },
        en: {
            translation: FR,
        },
        fr: {
            translation: FR,
        },
        pl: {
            translation: FR,
        },
    },
    lng: 'fr',
});

export default i18next;
