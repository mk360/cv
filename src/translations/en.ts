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
      "Native JavaScript (ES5+).",
      "TypeScript.",
      "React, DOM API and Node.js.",
      "MongoDB CRUD operations and aggregations.",
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
      startDate: "May 2021",
      endDate: "Currently",
      company: "Jamtech / Smood",
      position: "Full-Stack, Front-End Developer",
      highlights: [
        "Spontaneous French-English communication. Perfect language mastery resulting in concrete exchanges and improved relations across 3 departments.",
        "Explained basic programming concepts for product owners when relevant to the problem at hand.",
        "Managed critical issues within timeframes as short as 3 days.",
        "Drove technical debt cleanup with 20 suggestions and guidance on how to apply said suggestions.",
        "Guided a 5-member team ranging between 2 and 15 years of experience with advanced TypeScript and React knowledge.",
        "Taught 8 team and department members about JavaScript's details and quirks through friendly competitions.",
        "Developed a great codebase awareness, helping newcomers speed up tasks by 30%."
      ]
    },
    {
      startDate: "June 2019",
      endDate: "April 2020",
      company: "NavyBits",
      position: "Full-Stack Web Developer",
      highlights: [
        "Integrated TypeScript in the company: implemented the technical infrastructure necessary to exploit the technology resulting in a 40% development speed increase.",
        "Created a backend module that reduced e-commerce application creation by 60%.",
        "Efficient multitasking in concurrent projects: facilitated 3 customer projects, with roles either on back-end or front-end development, often handling both."
      ]
    }]
  },
  "personal-projects": {
    title: "Personal Projects",
    content: [
      {
        startDate: "June 2017",
        endDate: "February 2022",
        company: "",
        position: "Community Discord Bot Developer",
        highlights: [
          "Discord bot for a 20-member community, with 6 regular users.",
          "Separate Discord bot that archives past and present chat of the same community's members in a GDPR-compliant fashion. Uses the same platform as a host.",
          "Created a private GitLab instance that will host these 2 bots in the future."
        ]
      },
      {
        startDate: "",
        endDate: "",
        company: "",
        position: "Front-End Project: SVG Timeline Visualizer",
        highlights: [
          "Divided tasks in the 2-member team of the project, assigning 1 person to the timeline's engine, and 1 to create the visual output.",
          "Gave insight and helped the project teammate with TypeScript issues and logical problems.",
          "Installed 3 development tools and scripts to benefit from hot-reloading, improving development speed by 40%.",
          "Designed the project in a modular, generic way to leverage any environment that supports TypeScript."
        ]
      },
      {
        startDate: "February 2022",
        endDate: "Currently",
        company: "",
        position: "TypeScript official documentation translation.",
        highlights: [
          "Ongoing translation of TypeScript's official documentation, from English to French.",
          "Translated 1500 lines from the official handbook, with an objective of completing the handbook and clearing the rest of the pages."
        ]
      }
    ]
  }
};

export default EN;
