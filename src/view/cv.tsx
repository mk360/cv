import { useTranslation } from 'react-i18next';
import Column from '../components/column';
import Intro from '../components/intro';
import Header from '../components/section-header';
import styles from './cv.scss';

function CVView() {
    const { t } = useTranslation();
    return (
        <main className={styles.background}> {/** background */}
            <Intro />
            <div style={{ display: 'flex' }}>
                <Column flexSize={2}>
                    <div>
                        <Header theme='secondary'>
                            {t('contact-informations.title')}
                        </Header>
                        <div>
                            <ul>
                                <li>Adresse email : 45</li>
                                <li>N° tél. : + 33 6 10 34</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <Header theme='secondary'>
                            {t('personal-informations.title')}
                        </Header>
                        <div>
                            <ul>
                                <li>Date de naissance : 5 juillet 1999</li>
                                <li>Nationalités : Française, Libanaise</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <Header theme='secondary'>
                            {t('personal-informations.languages.title')}
                        </Header>
                        <div>
                            <ul>
                                <li>Francuski</li>
                                <li>Arabski</li>
                                <li>Angielski</li>
                                <li>Polski</li>
                            </ul>
                        </div>
                    </div>
                </Column>
                <Column flexSize={6}>
                    
                </Column>
            </div>
        </main>
    );
};

export default CVView;
