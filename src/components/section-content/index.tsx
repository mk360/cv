import { useTranslation } from "react-i18next";
import Experience from "../../interfaces/experience";
import './style.scss';

type key = 'personal-projects' | 'professional-experience' | 'education';

function SectionContent(props: { transKey: key }) {
    const { transKey } = props;
    const { t } = useTranslation();
    const content = t(transKey, { returnObjects: true }) as {
        content: Experience[];
    };

    if (transKey === 'education') console.log(content.content);

    return <>{content.content.map(exp => (
        <div key={`${exp.startDate}-${exp.endDate}-${exp.company}`} className='content-container'>
            <div className="job-intro">
                <span className="flex align-center">
                    {!!exp.startDate && `${exp.startDate} - ${exp.endDate}`}
                </span>
                <span style={{ flex: 1, textAlign: 'center' }}>
                    {exp.position}
                </span>
                <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'  }}>
                {exp.company}
                </span>
            </div>
            {!!exp.highlights && <ul>
                {exp.highlights?.map(h => (
                    <li key={h}>{h}</li>
                ))}
            </ul>}
        </div>
    ))}</>;
};

export default SectionContent;
