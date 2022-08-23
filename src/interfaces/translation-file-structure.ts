import Experience from "./experience";

interface TranslationFileStructure {
    heading: {
        name: string;
        occupation: string;
    }
    "contact-informations": {
        title: string;
        "phone-number": {
            title: string;
            value: string;
        }
        "email-address": {
            title: string;
            value: string;
        }
    }
    "personal-informations": {
        title: string;
        nationality: {
            title: string;
            value: string;
        }
    }
    social: {
        title: string;
        github: string;
        codingame: string;
        linkedin: string;
    }
    languages: {
        title: string;
        french: string;
        arabic: string;
        english: string;
        polish: string;
    }
    "technical-skills": {
        title: string;
        content: string[];
    }
    "soft-skills": {
        title: string;
        content: string[];
    }
    "hobbies"?: {
        title: string;
        content: string[];
    }
    "professional-experience": {
        title: string;
        content: Experience[];
    }
    "personal-projects": {
        title: string;
        content: Experience[];
    }
};

export default TranslationFileStructure;
