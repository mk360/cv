import TranslationFileStructure from "../interfaces/translation-file-structure";

const FR: TranslationFileStructure = {
  heading: {
    name: "Mohamed Kassar",
    occupation: "Développeur Web Full-Stack"
  },
  "contact-informations": {
    title: "Contact",
    "phone-number": {
      title: "N° tél. : ",
      value: "+33 6 16 06 31 51"
    },
    "email-address": {
      title: "Adresse e-mail : ",
      value: "mohamed.kassar36@hotmail.com"
    }
  },
  "personal-informations": {
    title: "Informations personnelles",
    "date-of-birth": {
      title: "Date de naissance : ",
      value: "5 juillet 1999"
    },
    nationality: {
      title: "Nationalités : ",
      value: "Française, Libanaise"
    }
  },
  social: {
    title: "Réseaux sociaux",
    github: "GitHub : ",
    linkedin: "Profil LinkedIn",
    codingame: "Certification CodinGame"
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
      "Connaissance approfondie en JS natif (ES5+).",
      "Niveau de TypeScript avancé.",
      "Maîtrise de React, de DOM API et Node.js.",
      "Aisance avec divers Design Patterns et Data Structures.",
      "Maîtrise des opérations CRUD avec MongoDB, bases en agrégations.",
      "Bases en Go.",
      "Bases en design UI avec Figma."
    ]
  },
  "soft-skills": {
    title: "Compétences personnelles",
    content: [
      "Capable de traiter les imprévus sans assistance externe, de réfléchir \"out of the box\".",
      "Apprécie le partage de connaissances dans les deux sens.",
      "Proactif, source constante d'idées et d'initiatives.",
      "Peut travailler individuellement ou en équipe."
    ]
  },
  hobbies: {
    title: "Centres d'intérêt",
    content: [
      "Jeux vidéo d'infiltration, de combat, de sport, de stratégie.",
      "Fan de NBA et de football européen, culture sportive générale.",
      "Contribution à des wikis collaboratifs sous divers thèmes.",
      "Création et composition de musique à un niveau débutant.",
      "Débutant en escalade en salle."
    ]
  },
  "professional-experience": {
    title: "Expérience Professionnelle",
    content: [{
      startDate: "25 mai 2021",
      endDate: "",
      company: "Jamtech / Smood",
      position: "Développeur Full-Stack, Front-End",
      highlights: [
        "Communication français-anglais spontanée, parfaite maîtrise permettant des échanges bilingues faciles et pertinents.",
        "Membre de confiance et très fiable : assignation régulière à des problématiques critiques et urgentes dans des délais stricts.",
        "Aptitude démontrée à la transmission de savoir : référent principal en React et essentiel en TypeScript, dans une équipe de 5 membres allant de 2 à 15 ans d'expérience.",
        "Excellente adaptabilité : contributeur majeur sur les projets nouveaux comme anciens. Connaissance étendue de la codebase.",
        "Qualité technique et savoir-faire supérieurs, rendant possible la résolution de problèmes a priori impossibles.",
      ]
    },
    {
      startDate: "Juin 2019",
      endDate: "Avril 2020",
      company: "NavyBits",
      position: "Développeur Web Full-Stack",
      highlights: [
        "Source intarissable d'idées : introduction de TypeScript, suggestion de features, solutions techniques créatives et pertinentes.",
        "Création d'un module backend qui réduit de 60% le travail de création d'applications e-commerce.",
        "Implication constante dans tous les projets, sur les aspects Back-End et Front-End associés."
      ]
    }]
  },
  "personal-projects": {
    title: "Projets Personnels",
    content: [
      {
        startDate: "Avril 2022",
        endDate: "",
        company: "",
        position: "Projet full-stack : facturation pour service de livraison",
        highlights: [
          "Projet individuel divisé en trois grandes parties : un backend en Nest.js, relié à une application mobile avec React Native / Expo, et un frontend web avec Svelte.js",
          "Développement de spécifications techniques pour le projet, création d'un design adapté pour l'application."
        ]
      },{
        startDate: "Février 2022",
        endDate: "",
        company: "",
        position: "Traducteur de la documentation officielle TypeScript.",
        highlights: [
          "Traduction en cours de la documentation officielle TypeScript, de l'anglais vers le français."
        ]
      },
      {
      startDate: "2017",
      endDate: "2022",
      company: "",
      position: "Développeur de bots communautaires Discord",
      highlights: [
        "Bot Discord pour une communauté de 40 membres. Utilise MongoDB pour le stockage, TypeScript comme langage, Node.js comme runtime, le tout hébergé sur un service SaaS externe. Ce bot remplit des fonctions de base de données interactive, est source de memes et doté de fonctionnalités sociales.",
        "Bot Discord séparé qui archive les discussions passées et présentes des membres de la même communauté, tout en respectant la RGPD. Possède le même stack technique."
      ]
      }
    ]
  }
};

export default FR;
