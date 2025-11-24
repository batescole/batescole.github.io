export const siteConfig = {
  name: "Cole Bates",
  title: "Tech Project Manager: Solving problems one line of code at a time.",
  description: "Portfolio website of Cole Bates",
  accentColor: "#303030",
  social: {
    email: "bates.cole@gmail.com",
    linkedin: "https://linkedin.com/in/cole-bates",
    github: "https://github.com/batescole",
  },
  aboutMe:
    "Solving complex problems with software and data analysis—whether it be leading cross-functional teams to excel or personal passsion projects.",
  skills: ["Python", "SQL", "R", "JavaScript", "HTML/CSS", "Data Analysis", "Machine Learning"],
  projects: [
    {
      name: "Daily Automated Real Estate Fetcher",
      description:
        "A Python project using RapidAPI to extract and analyze property listings from Zillow. Implemented cron-based scheduling, persistant automation, and clean output to assist me on the house hunt.",
      link: "https://github.com/batescole/real-estate-api-fetcher",
      skills: ["Python", "API", "Cron", "NumPy", "Pandas"],
    },
    {
      name: "PDF to Text Converter: Machine Learning Project",
      description:
        "A machine learning project that converts PDF files to text files using Python and the PyPDF2 library.",
      link: "https://github.com/batescole/PDF-to-Text-LLM",
      skills: ["Python", "Jupyter Notebook", "Machine Learning", "PDF LLM"],
    },
    
  ],

  experience: [
    {
      company: "T5 Group",
      title: "Senior Project Manager",
      dateRange: "May 2019 - Present",
      bullets: [
        "Spearhead Agile-hybrid turnkey implementations of EAM software in SQL Server environments, orchestrating full lifecycle deployments for asset-heavy industries; optimizing predictive maintenance strategies, slashing downtime, and ensuring compliance",
        "Direct cross-functional teams as sole lead in integrating IoT condition monitoring (lubrication, thermography, vibration), fostering increased trasnparency and efficiency while providing actionable solutions",
        "Lead data migration and legacy system integrations, seamlessly interfacing with ERP systems (SAP/JDE) and data visualization tools (PowerBI/Qlik) for real-time analytics and predictive dashboards",
      ],
    },
    
  ],

  education: [
    {
      school: "University of Tennessee @ Chattanooga",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2015 - 2020",
      achievements: [
        "Kappa Alpha Order",
      ],
    },
  ],
};
