import LanguageKey from "../types/language-key";

type TranslationKey = 'introduction' | 'pro-experience' | 'personal-projects' | 'technologies' | 'languages';

type ProfessionalExperience = {
  startDate: string
  endDate: string
  jobTitle: string
  location: string
  jobDescription: string
};

type CV_Content = {
  [language in LanguageKey]?: {
    [transKey in TranslationKey]?: Array<string | ProfessionalExperience>
  }
};

const Content: CV_Content = {
  fr: {

  },
  en: {

  },
  pl: {
    
  }
};

export default Content;
