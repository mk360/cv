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
    "date-of-birth": {
      title: "Date of birth: ",
      value: "July 5th, 1999"
    },
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
      "Able to deal with unexpected events without outside help, to think out of the box.",
      "Appreciates receiving and sharing knowledge.",
      "Proactive, constant source of initiatives and ideas.",
      "Can work alone or in a squad."
    ]
  },
  hobbies: {
    title: "Hobbies",
    content: [
      "Stealth, strategy, sports and fighting video games.",
      "NBA and European Football fan, all-around sports culture.",
      "Contributes to collaborative wikis with diverse themes.",
      "Beginner in music composition.",
      "Beginner in indoors climbing."
    ]
  },
  "professional-experience": {
    title: "Professional Experience",
    content: [{
      startDate: "May 25th, 2021",
      endDate: "",
      company: "Jamtech / Smood",
      position: "Full-Stack, Front-End Developer",
      highlights: [
        "Main contributor in TypeScript and React.",
        "Major contributor in the team's skill development in TypeScript.",
        "Handled sections of crucial applications alone.",
        "Developed tools that accelerated the creation of UI components in a shared library."
      ]
    },
    {
      startDate: "June 2019",
      endDate: "April 2020",
      company: "NavyBits",
      position: "Full-Stack Web Developer",
      highlights: [
        "Introduced TypeScript in the company.",
        "Created a backend module that reduced e-commerce application creation by 60%.",
        "Efficient multitasking when handling concurrent projects."
      ]
    }]
  },
  "personal-projects": {
    title: "Personal Projects",
    content: [
      {
        startDate: "April 2022",
        endDate: "",
        company: "",
        position: "Full-Stack project: Billing for delivery service",
        highlights: [
          "Project divided in three major parts: a Nest.js backend, to which a mobile app made with React Native / Expo is connected, as well as a web frontend with the Svelte.js framework.",
          "Developed technical specifications for the project. Made the design for the mobile application."
        ]
      },{
        startDate: "February 2022",
        endDate: "",
        company: "",
        position: "TypeScript official documentation translation.",
        highlights: [
          "Ongoing translation of TypeScript's official documentation, from English to French."
        ]
      },
      {
      startDate: "2017",
      endDate: "2022",
      company: "",
      position: "Community Discord Bot Developer",
      highlights: [
        "Discord bot for a 40-member community. Uses MongoDB for storage, TypeScript as the language, Node.js as a runtime, all of which is hosted on an external SaaS platform. The bot is used as an interactive database, memes source and social functions.",
        "Separate Discord bot that archives past and present chat of the same community's members in a GDPR-compliant fashion. Presents the same tech stack, and is hosted on the same platform."
      ]
      }
    ]
  }
};

export default EN;
