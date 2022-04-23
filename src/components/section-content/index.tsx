import SectionContentProps from "./props";

function SectionContent(props: SectionContentProps) {
    const { content } = props;

    if (Array.isArray(content)) {
        return (
            <ul>
                {content.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    } else {
        return <p>content</p>;
    }
};

export default SectionContent;
