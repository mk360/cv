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
      "Habile dans la vulgarisation et explication de sujets complexes.",
      "Source constante d'initiatives."
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
  "education": {
    content: [{ highlights: ["Appris le développement à travers un parcours auto-didacte et les projets open-source depuis 2013."] }]
  },
  "professional-experience": {
    title: "Expérience Professionnelle",
    content: [{
      startDate: "25 mai 2021",
      endDate: "",
      company: "Jamtech / Smood",
      position: "Développeur Full-Stack, Front-End",
      highlights: [
        "Démontré une excellente maîtrise bilingue français-anglais, permettant des échanges fluides et des rapports améliorés entre les 3 départements impliqués.",
        "Expliqué 2 concepts basiques de programmations aux product owners quand c'était nécessaire pour la tâche",
        "Résolu 4 problèmes critiques dans des délais inférieurs à 3 jours",
        "Mené le nettoyage de dette technique avec 20 suggestions sur sa réduction et des conseils sur comment y procéder",
        "Conseillé une équipe de 5 membres allant de 2 à 15 ans d'expérience avec des connaissances React et TypeScript avancées",
        "Enseigné les particularités de JavaScript à 8 membres dans l'équipe et dans d'autres équipes, à travers des compétitions",
        "Développé une connaissance de la base de code des 7 projets engagés, permettant d'aider efficacement les nouveaux venus"
      ]
    },
    {
      startDate: "Juin 2019",
      endDate: "Avril 2020",
      company: "NavyBits",
      position: "Développeur Web Full-Stack",
      highlights: [
        "Introduction de TypeScript: configuration du socle technique nécessaire à la technologie, donnant une amélioration de l'expérience développeur de 20%.",
        "Création d'un module backend qui réduit de 60% le travail de création d'applications e-commerce.",
        "Implication constante dans tous les 5 projets, sur les aspects Back-End et Front-End associés."
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
        position: "Projet front-end : chronologie d'événements en SVG",
        highlights: [
          "Divisé les tâches de l'équipe de 2, assignant 1 personne au moteur de la chronologie et 1 pour le rendu visuel",
          "Donné conseil et apporté des coups de main sur 10 problématiques de logique et de TypeScript",
          "Installé 3 outils et scripts de développement pour bénéficier du hot-reloading et une vitesse de développement accrue de 40%",
          "Conçu le projet en 2 classes distinctes pour exploiter tous les environnements qui peuvent lancer TypeScript"
        ]
      },
      {
        startDate: "",
        endDate: "",
        company: "",
        position: "Traducteur de la documentation officielle TypeScript.",
        highlights: [
          "Commencé la traduction de la documentation officielle de TypeScript, de l'anglais vers le français",
          "Traduit 1500 lignes du manuel officiel, sur un objectif de 6000 lignes ainsi que le reste des pages"
        ]
      },
      {
      startDate: "2017",
      endDate: "2022",
      company: "",
      position: "Développeur de bots communautaires Discord",
      highlights: [
        "Introduit et fait évoluer une base de données interactive pour une communauté de 20 personnes dont 6 utilisateurs réguliers",
        "Lancé un service d'archivage qui a archivé 250,000 messages de cette communauté",
        "Hébergé une instance privée de GitLab pour accueillir ces 2 bots dans le futur"
      ]
      }
    ]
  }
};

export default FR;
