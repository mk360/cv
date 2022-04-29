import { useTranslation } from 'react-i18next';
import'./style.scss';

function Intro() {
    const { t } = useTranslation();

    return (
        <header className="heading">
            <p className="name">{t('heading.name')}</p>
            <p className="occupation">{t('heading.occupation')}</p>
        </header>
    );
};

export default Intro;
