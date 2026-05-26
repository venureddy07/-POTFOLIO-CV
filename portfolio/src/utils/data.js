// Central portfolio data store for Pagidala Venugopal Reddy

export const personalInfo = {
  name: "Pagidala Venugopal Reddy",
  title: "Computer Science Engineer | Aspiring Data Scientist | AI & Web Development Enthusiast",
  aboutShort: "I am a passionate Computer Science Engineering student with strong interests in Data Science, AI-powered applications, Web Development, and Analytics. I enjoy building real-world solutions using Python, Flask, C++, and modern web technologies. I continuously learn and explore emerging technologies to improve my technical and problem-solving skills.",
  resumeUrl: "#", // User can replace this with a real link
  email: "venureddy77.pagidela@gmail.com",
  github: "https://github.com/venureddy07",
  linkedin: "https://www.linkedin.com/in/venureddy07/"
};

export const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Certifications Completed", value: "8+" },
  { label: "Technologies Mastered", value: "12+" }
];

export const skills = {
  programming: [
    { name: "Python", level: 90, icon: "Terminal" },
    { name: "C++", level: 85, icon: "Cpu" },
    { name: "HTML5", level: 95, icon: "FileCode" },
    { name: "CSS3", level: 90, icon: "Sliders" }
  ],
  tools: [
    { name: "MySQL", level: 88, icon: "Database" },
    { name: "Power BI", level: 80, icon: "BarChart3" },
    { name: "VS Code", level: 95, icon: "Code2" },
    { name: "Jupyter Notebook", level: 90, icon: "BookOpen" },
    { name: "Android Studio", level: 75, icon: "Smartphone" }
  ],
  technologies: [
    { name: "Flask", level: 85, icon: "Server" },
    { name: "Data Analysis", level: 90, icon: "PieChart" },
    { name: "EDA (Exploratory Data Analysis)", level: 88, icon: "LineChart" },
    { name: "AI APIs (Gemini, ChatGPT)", level: 85, icon: "Sparkles" },
    { name: "Web Development", level: 92, icon: "Globe" }
  ],
  softSkills: [
    { name: "Team Player", level: 95, icon: "Users" },
    { name: "Time Management", level: 90, icon: "Clock" },
    { name: "Adaptability", level: 95, icon: "RefreshCw" }
  ]
};

export const experiences = [
  {
    role: "Data Science Intern",
    company: "InternsElite",
    duration: "September 2024 – November 2024",
    description: "Conducted extensive analysis of consumer smartphones, sales data, and business metrics to provide strategic recommendations.",
    responsibilities: [
      "Performed structural data cleaning, preparation, and integration using Pandas and NumPy, handling missing fields and anomalies.",
      "Conducted comprehensive Exploratory Data Analysis (EDA) on major smartphone pricing distributions and market demand segments.",
      "Designed dynamic charts and visual dashboards to highlight pricing trends, brand competition, and key revenue drivers.",
      "Worked deeply with smartphone pricing datasets to discover strong correlations between hardware specs (RAM, camera, storage) and prices.",
      "Identified critical sales correlations, assisting business insights by mapping features to buyer preference curves."
    ]
  }
];

export const projects = [
  {
    title: "Student Attendance System",
    description: "A highly performant, web-based classroom management system allowing instructors to mark real-time attendance, manage enrollments, and export automated reports.",
    tech: ["C++", "Python Flask", "HTML5", "CSS3", "JavaScript", "JSON"],
    github: "https://github.com/venureddy07",
    demo: "#",
    features: [
      "Real-time web dashboard for active attendance marking.",
      "Automated attendance report generation in CSV and PDF formats.",
      "Secure backend with custom authentication systems.",
      "High-speed C++ data structure engines for fast student query index searches."
    ]
  },
  {
    title: "AI Fact Generator",
    description: "A multi-lingual generative AI application leveraging the Gemini API to produce fascinating, contextual trivia and validated educational facts across various categories.",
    tech: ["Python Flask", "Gemini API", "HTML5", "JavaScript", "CSS3"],
    github: "https://github.com/venureddy07",
    demo: "#",
    features: [
      "Intelligent translation engine supporting English, Telugu, and Hindi.",
      "Real-time AI query streaming using Gemini API endpoints.",
      "Full user account creation and saved search logs in a local database.",
      "Aesthetic glassmorphism cards representing various topics (Science, History, Tech)."
    ]
  },
  {
    title: "Smartphone Trends in Indian Market",
    description: "An advanced data analysis project compiling thousands of smartphone entries to reveal pricing structures, brand market share dominance, and high-correlation specifications.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Testing"],
    github: "https://github.com/venureddy07",
    demo: "#",
    features: [
      "Rigorous data pipeline cleaning and compiling complex pricing matrices.",
      "In-depth correlation maps (Seaborn) showcasing RAM/ROM effects on cost.",
      "Statistical ANOVA and t-testing proving market brand pricing differences.",
      "Detailed brand pricing distributions and feature trends."
    ]
  }
];

export const certifications = [
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys",
    date: "2024",
    link: "#",
    skills: ["AI Systems", "Prompt Optimization", "Context Engineering"]
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    link: "#",
    skills: ["Virtualization", "Cloud Architectures", "Resource Management"]
  },
  {
    title: "Computer Communication",
    issuer: "Coursera",
    date: "2023",
    link: "#",
    skills: ["Networking Protocols", "Data Transmission", "Routing Algorithms"]
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "2023",
    link: "#",
    skills: ["CPU Architecture", "Memory Management", "OS Scheduling"]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    score: "CGPA: 5.0 / 10",
    period: "2023 – Present",
    details: "Focused on core algorithms, database administration, data analysis models, and software engineering structures."
  },
  {
    degree: "Intermediate Education (Class XII)",
    institution: "Sri Chaitanya Junior College",
    score: "Percentage: 73%",
    period: "2021 – 2023",
    details: "Specialized in Mathematics, Physics, and Chemistry (MPC) with a highly rigorous scientific foundation."
  },
  {
    degree: "SSC Secondary School Education (Class X)",
    institution: "Sri Chaitanya E.M High School",
    score: "Percentage: 98%",
    period: "2020 – 2021",
    details: "Completed school education with state ranking scores, excelling in science, mathematics, and analytical subjects."
  }
];
