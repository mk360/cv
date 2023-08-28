import TranslationFileStructure from "../interfaces/translation-file-structure";

const FR: TranslationFileStructure = {
  heading: {
    name: "Youssef Kassar",
    occupation: "Lycéen en Terminale (Masséna)"
  },
  "contact-informations": {
    title: "Contact",
    "phone-number": {
      title: "N° tél. : ",
      value: "06 75 02 61 42"
    },
    "email-address": {
      title: "Adresse e-mail : ",
      value: "mk360ftw@gmail.com"
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
    linkedin: "Profil LinkedIn",
    github: "",
    codingame: ""
  },
  languages: {
    title: "Langues parlées",
    french: "Français (natif)",
    arabic: "Arabe (natif)",
    english: "Anglais (professionnel)",
    polish: ""
  },
  "technical-skills": {
    title: "Compétences techniques",
    content: [
      "Covadis (applicatif AutoCAD)",
      "Qgis",
      "Béton armé et précontraint (calculs préliminaires)",
      "AutoCAD",
      "Pack Office",
    ]
  },
  "soft-skills": {
    title: "Compétences personnelles",
    content: [
      "Management de petites équipes",
      "Autonomie",
      "Rigueur",
      "Travail d'équipe",
      "Leadership à petite échelle",
    ]
  },
  hobbies: {
    title: "Centres d'intérêt",
    content: [
      "Fortes connaissances en matériel informatique",
      "Jeux vidéo de tir à la première personne",
      "Musculation",
      "Sports collectifs : football",
      "Attiré par la politique",
      "Investisseur débutant dans les marchés financiers"
    ]
  },
  "education": {
    content: [{
      highlights: [
        "Diplôme National du Brevet, mention Bien"
      ]
    }]
  },
  "professional-experience": {
    title: "Expériences",
    content: [{
      startDate: "Été 2019",
      endDate: "",
      company: "",
      position: "Travailleur assistant poseur de sols souples",
      highlights: [
        "Transport de produits de rénovation de sols",
        "Pratique directe de la pose de nouveaux sols selon les matériaux utilisés"
      ]
    },
    {
      startDate: "Été 2018",
      endDate: "",
      company: "",
      highlights: [
        "Élargissement des connaissances culturelles pour pouvoir renseigner les clients",
        "Apprentissage d'une attitude commerciale professionnelle pour attirer de nouveaux voyageurs"
      ],
      position: "Agence de voyages",
    },
  {
    startDate: "Été 2017",
    company: "",
    endDate: "",
    position: "Vendeur assistant dans magasin de chaussures",
    highlights: [
      "Développement de relations sociales et commerciales avec les clients",
      "Vente directe de chaussures selon les spécifications des clients"
    ]
  }]
  },
  "personal-projects": {
    title: "Projets Personnels",
    content: [
      {
        startDate: "",
        endDate: "",
        company: "",
        position: "",
        highlights: [
          "Construit 4 PCs : un personnel, 2 à des amis, et un à un membre de la famille",
          "Participation au MEDMUN 2022 à Menton, représentant le Liban"
        ]
      },

    ]
  }
};

export default FR;
