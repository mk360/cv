import { useTranslation } from 'react-i18next';
import style from './style.scss';

function Intro() {
    const { t } = useTranslation();

    return (
        <header className={style.heading}>
            <p className={style.name}>{t('heading.name')}</p>
            <p className={style.occupation}>{t('heading.occupation')}</p>
        </header>
    );
};

export default Intro;
