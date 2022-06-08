import { useTranslation } from "next-i18next";
import Experience from "../../interfaces/experience";
import styles from './section-content.module.scss';

type key = 'personal-projects' | 'professional-experience';

function SectionContent(props: { transKey: key }) {
    const { transKey } = props;
    const { t } = useTranslation('common');

    const content = t(transKey, { returnObjects: true }) as {
        content: Experience[];
    };

    console.log(content.content);

    if (!content?.content) return null;

    return <>{content.content.map(exp => (
        <div key={`${exp.startDate}-${exp.endDate}-${exp.company}`} className={styles['content-container']}>
            <div className={styles['job-intro']}>
                <span className={`${styles['flex']} ${styles['align-center']}`}>
                    {exp.startDate} - {exp.endDate}
                </span>
                <span style={{ flex: 1, textAlign: 'center' }}>
                    {exp.position}
                </span>
                <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'  }}>
                {exp.company}
                </span>
            </div>
            {exp.highlights?.length === 1 ? <p>{exp.highlights}</p>: <ul>
                {exp.highlights?.map(h => (
                    <li key={h}>{h}</li>
                ))}
            </ul>}
        </div>
    ))}</>;
};

export default SectionContent;
