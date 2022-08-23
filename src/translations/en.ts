import TranslationFileStructure from "../interfaces/translation-file-structure";

const EN: TranslationFileStructure = {
  heading: {
    name: "Muhammad Kassar",
    occupation: "Full-Stack Web Developer"
  },
  "contact-informations": {
    title: "Contact",
    "phone-number": {
      title: "Phone Number: ",
      value: "+33 6 16 06 31 51"
    },
    "email-address": {
      title: "Email address: ",
      value: "mohamed.kassar36@hotmail.com"
    }
  },
  "personal-informations": {
    title: "Personal Informations",
    nationality: {
      title: "Nationalities: ",
      value: "French, Lebanese"
    }
  },
  social: {
    title: "Social Networks",
    github: "GitHub: ",
    linkedin: "LinkedIn Profile",
    codingame: "CodinGame Certification"
  },
  languages: {
    title: "Languages",
    french: "French (native)",
    arabic: "Arabic (native)",
    english: "English (casual, professional)",
    polish: "Polish (beginner)"
  },
  "technical-skills": {
    title: "Technical Skills",
    content: [
      "Deep understanding of native JavaScript (ES5+).",
      "Advanced level in TypeScript.",
      "High proficiency in React, DOM API and Node.js.",
      "Ease of use of diverse Design Patterns and Data Structures.",
      "Proficiency in MongoDB CRUD operations, basic skills in aggregations.",
      "Basics in Go.",
      "Basics in UI design with Figma."
    ]
  },
  "soft-skills": {
    title: "Soft skills",
    content: [
      "Deft at breaking down complex and high-level topics.",
      "Constant source of initiatives and ideas."
    ]
  },
  // hobbies: {
  //   title: "Hobbies",
  //   content: [
  //     "Stealth, strategy, sports and fighting video games.",
  //     "NBA and European Football fan, all-around sports culture.",
  //     "Contributes to collaborative wikis with diverse themes.",
  //     "Beginner in music composition.",
  //     "Beginner in indoors climbing."
  //   ]
  // },
  "professional-experience": {
    title: "Professional Experience",
    content: [{
      startDate: "May 25th, 2021",
      endDate: "",
      company: "Jamtech / Smood",
      position: "Full-Stack, Front-End Developer",
      highlights: [
        "Spontaneous French-English communication. Perfect language mastery resulting in relevant exchanges and improved relations.",
        "Regular handling of critical and urgent issues within strict timeframes as short as 3 days.",
        "Proven teaching ability: key member and knowledge provider in TypeScript and React, in a 5-member team ranging between 2 and 15 years of experience.",
        "Extensive codebase knowledge that helps guide newcomers and speed up their tasks by 30%.",
        "Able to, in 10 minutes, debug issues that take hours for other team members."
      ]
    },
    {
      startDate: "June 2019",
      endDate: "April 2020",
      company: "NavyBits",
      position: "Full-Stack Web Developer",
      highlights: [
        "Introduced TypeScript in the company: provided the technical infrastructure (tsconfig, file system architecture) necessary to exploit the technology.",
        "Created a backend module that reduced e-commerce application creation by 60%.",
        "Efficient multitasking in concurrent projects: constantly involved in 3 customer projects, with roles either on back-end or front-end development, often handling both."
      ]
    }]
  },
  "personal-projects": {
    title: "Personal Projects",
    content: [
      {
        startDate: "2017",
        endDate: "2022",
        company: "",
        position: "Community Discord Bot Developer",
        highlights: [
          "Discord bot for a 40-member community. Uses MongoDB for storage, TypeScript as the language, Node.js as a runtime, all of which is hosted on an external SaaS platform. The bot is used as an interactive database, memes source and social functions.",
          "Separate Discord bot that archives past and present chat of the same community's members in a GDPR-compliant fashion. Presents the same tech stack, and is hosted on the same platform."
        ]
      },
      // {
      //   startDate: 'August 2022',
      //   endDate: '',
      //   company: '',
      //   position: 'GitLab Instance Hosting',
      //   highlights: [
      //     'Learning and practicing Continuous Integration / Continuous Delivery basics.',
      //     ''
      //   ]
      // },
      {
        startDate: "",
        endDate: "",
        company: "",
        position: "Full-Stack project: Billing for delivery service",
        highlights: [
          "High learning speed coupled with a hands-on practical approach, allowing for an experience gain in the involved technologies (Nest.js, React Native, Svelte).",
          "Gradual adoption of programming-complementary skills, such as UI and UX design."
        ]
      },
      {
        startDate: "February 2022",
        endDate: "",
        company: "",
        position: "TypeScript official documentation translation.",
        highlights: [
          "Ongoing translation of TypeScript's official documentation, from English to French."
        ]
      }
    ]
  }
};

export default EN;
