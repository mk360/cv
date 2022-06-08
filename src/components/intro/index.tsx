import { useTranslation } from 'next-i18next';
import styles from './intro.module.scss';

function Intro() {
    const { t } = useTranslation();

    return (
        <header className={styles.heading}>
            <p className={styles.name}>{t('heading.name')}</p>
            <p className={styles.occupation}>{t('heading.occupation')}</p>
        </header>
    );
};

export default Intro;
