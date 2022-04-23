import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import FR from './translations/fr';

i18next.use(initReactI18next).init({
    resources: {
        fr: JSON.parse(JSON.stringify(FR)),
        en: JSON.parse(JSON.stringify(FR)),
        pl: JSON.parse(JSON.stringify(FR)),
        ar: JSON.parse(JSON.stringify(FR)),
    },
    lng: 'fr',
});

export default i18next;
