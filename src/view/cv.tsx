import { useTranslation } from 'react-i18next';
import Column from '../components/column';
import Intro from '../components/intro';
import SectionContent from '../components/section-content';
import Header from '../components/section-header';
import './cv.scss';

function CVView() {
    const { t } = useTranslation();
    return (
        <main className='background'>
            <Intro />
            <div className='main-view'>
                <Column className='side' flexSize={1.9}>
                    <Header theme='secondary'>
                        {t('contact-informations.title')}
                    </Header>

                    <ul>
                        <li><b>{t('contact-informations.phone-number.title')}</b> {t('contact-informations.phone-number.value')}</li>

                        <li><b>{t('contact-informations.email-address.title')}</b> {t('contact-informations.email-address.value')}</li>
                    </ul>

                    <Header theme='secondary'>
                        {t('personal-informations.title')}
                    </Header>

                    <ul>
                        {/* <li>{t('personal-informations.date-of-birth.title')} {t('personal-informations.date-of-birth.value')}</li> */}
                        <li>{t('personal-informations.nationality.title')} {t('personal-informations.nationality.value')}</li>
                        <li>{t('social.github')} <a href="https://github.com/mk360">mk360</a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-kassar">
                            {t('social.linkedin')}
                        </a>
                        </li>
                        <li>
                            <a href="https://www.codingame.com/certification/g4Vygpnhcl7ygcowBMF-FA">{t('social.codingame')}</a>
                        </li>
                    </ul>

                    <Header theme='secondary'>
                        {t('languages.title')}
                    </Header>
                    <ul>
                        <li>{t('languages.french')}</li>
                        <li>{t('languages.arabic')}</li>
                        <li>{t('languages.english')}</li>
                        <li>{t('languages.polish')}</li>
                    </ul>

                    <Header theme='secondary'>
                        {t('technical-skills.title')}
                    </Header>
                    <ul>
                        <li>
                            {t('technical-skills.content.0')}
                        </li>
                        <li>
                            {t('technical-skills.content.1')}
                        </li>
                        <li>
                            {t('technical-skills.content.2')}
                        </li>
                        <li>
                            {t('technical-skills.content.3')}
                        </li>
                        <li>
                            {t('technical-skills.content.4')}
                        </li>
                    </ul>

                    <Header theme='secondary'>
                        {t('soft-skills.title')}
                    </Header>
                    <ul>
                        <li>
                            {t('soft-skills.content.0')}
                        </li>
                        <li>
                            {t('soft-skills.content.1')}
                        </li>
                    </ul>

                    {/* <Header theme='secondary'>
                        {t('hobbies.title')}
                    </Header>
                    <ul>
                        <li>
                            {t('hobbies.content.0')}
                        </li>
                        <li>
                            {t('hobbies.content.1')}
                        </li>
                        <li>
                            {t('hobbies.content.2')}
                        </li>
                        <li>
                            {t('hobbies.content.3')}
                        </li> */}
                        {/* <li>
                            {t('hobbies.content.4')}
                        </li> */}
                    {/* </ul> */}
                </Column>
                <Column className='main' flexSize={6}>
                    <Header theme='primary'>
                        {t('professional-experience.title')}
                    </Header>
                    <SectionContent transKey='professional-experience' />
                    
                    <Header theme='primary'>
                        {t('personal-projects.title')}
                    </Header>
                    <SectionContent transKey='personal-projects' />
                </Column>
            </div>
        </main>
    );
};

export default CVView;
