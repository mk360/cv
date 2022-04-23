import TranslationFileStructure from "../interfaces/translation-file-structure";

const FR: TranslationFileStructure = {
  heading: {
    name: "Mohamed Kassar",
    occupation: "Développeur Web Full-Stack"
  },
  "contact-informations": {
    title: "Contact",
    "phone-number": {
      title: "N° tél.",
      value: "+33 6 16 06 31 51"
    },
    "email-address": {
      title: "Adresse e-mail",
      value: "mohamed.kassar36@hotmail.com"
    }
  },
  "personal-informations": {
    title: "Informations personnelles",
    "date-of-birth": {
      title: "Date de naissance",
      value: "5 juillet 1999"
    },
    nationality: {
      title: "Nationalités",
      value: "Française, Libanaise"
    }
  },
  social: {
    title: "Réseaux sociaux",
    github: "https://github.com/mk360",
    linkedin: "",
    codingame: ""
  },
  languages: {
    title: "Langues parlées",
    french: "Français (natif)",
    arabic: "Arabe (natif)",
    english: "Anglais (quotidien, professionnel)",
    polish: "Polonais (débutant)"
  },
  "technical-skills": {
    title: "Compétences techniques",
    content: [
      "Connaissance approfondie en JS natif (ES5+)",
      "Niveau de TypeScript avancé",
      "Maîtrise de React, de DOM API et Node.js",
      "Aisance avec divers Design Patterns et Data Structures",
      "Maîtrise des opérations CRUD avec MongoDB",
      "Bases en Go",
      "Bases en design avec Figma"
    ]
  },
  "soft-skills": {
    title: "Compétences personnelles",
    content: [
      "Capable de traiter les imprévus sans assistance externe, de réfléchir \"out of the box\"",
      "Apprécie le partage de connaissances dans les deux sens",
      "Proactif, source constante d'idées et d'initiatives",
      "Peut travailler individuellement ou en équipe"
    ]
  },
  hobbies: {
    title: "Centres d'intérêt",
    content: [
      "Jeux vidéo d'infiltration, de combat, de sport, de stratégie",
      "Suivi de NBA et de football européen, culture sportive générale",
      "Contribution à des wikis collaboratifs sous divers thèmes",
      "Création et composition de musique à un niveau débutant",
      "Débutant en escalade en salle"
    ]
  },
  "professional-experience": {
    title: "Exp. Professionnelle",
    content: [{
      startDate: "25 mai 2021",
      endDate: "",
      company: "Jamtech / Smood",
      position: "Développeur Full-Stack, Front-End",
      highlights: [
        "Acquisition d'une réputation de niveau élevé en TypeScript et React.",
        "Assurance de la montée en compétences de l'équipe en TypeScript.",
        "Responsable unique de sections d'applications cruciales.",
        "Développement d'outils accélérant la création de composants UI dans une librairie interne."
      ]
    },
    {
      startDate: "Avril 2020",
      endDate: "Mai 2021",
      company: "",
      position: "",
      content: "Interruption de travail pour des raisons de santé"
    },
    {
      startDate: "Juin 2019",
      endDate: "Avril 2020",
      company: "NavyBits",
      position: "Développeur Web Full-Stack",
      highlights: [
        "Intronisation de TypeScript dans la compagnie.",
        "Création d'un module backend qui réduit de 60% le travail de création d'applications e-commerce."
      ]
    }]
  },
  "personal-projects": {
    title: "Projets Personnels",
    content: [{
        startDate: "2022",
        endDate: "",
        company: "",
        position: "Traducteur de la documentation officielle TypeScript",
        highlights: [
          "Traduction en cours de la documentation officielle TypeScript, de l'anglais vers le français."
        ]
      },
      {
      startDate: "2017",
      endDate: "2022",
      company: "",
      position: "Développeur de bot Discord communautaire",
      highlights: [
        "Bot Discord pour une communauté de 40 membres. Utilise MongoDB pour le stockage, TypeScript comme langage, Node.js comme runtime, le tout hébergé sur un service SaaS externe. Ce bot remplit des fonctions de base de données interactive, source de memes et doté de fonctionnalités sociales."
      ]
      }
    ]
  }
};

export default FR;