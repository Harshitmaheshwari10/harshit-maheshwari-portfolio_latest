export const personalInfo = {
  name: "Harshit Maheshwari",
  title: "Software Engineer & AI/ML Developer",
  email: "harshitmaheshwari321@gmail.com",
  phone: "+91 9755498881",
  github: "Harshitmaheshwari10",
  githubUrl: "https://github.com/Harshitmaheshwari10",
  linkedin: "Harshit Maheshwari",
  linkedinUrl: "https://linkedin.com/in/harshit-maheshwari",
  location: "Bhopal, Madhya Pradesh, India",
  gpa: "9.28/10.0",
  tagline: "Building intelligent systems that bridge AI and real-world impact.",
  bio: "I'm a 3rd-year Information Technology student at Manipal University Jaipur with a consistent 9.28 GPA and 6× Dean's List recognition. I build end-to-end systems spanning AI/ML, full-stack web, and embedded IoT — always with a focus on shipping production-ready work. From filing patents to clearing competitive hackathon rounds, I bring engineering rigour and creative problem-solving to everything I build.",
  resumeUrl: "/resume.pdf",
};

export const roles = [
  "Software Developer",
  "AI/ML Engineer",
  "Full-Stack Builder",
  "Problem Solver",
  "Hackathon Finalist",
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Manipal University Jaipur",
    period: "2023 – 2027",
    gpa: "9.28 / 10.0",
    highlight: "6× Dean's List of Excellence",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Advanced Data Structures",
      "Computer Vision",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "RDBMS",
    ],
  },
  {
    degree: "Higher Secondary — Science",
    institution: "N.S. Singhvi H.S. School",
    period: "2021 – 2022",
    gpa: "84.2%",
    highlight: "PCM with Computer Science",
    courses: [],
  },
  {
    degree: "Secondary Education",
    institution: "Lotus Valley School",
    period: "2019 – 2020",
    gpa: "92.8%",
    highlight: "School Merit Achiever",
    courses: [],
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 92 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Java", level: 78 },
    { name: "C++", level: 75 },
    { name: "C", level: 72 },
  ],
  webDev: [
    { name: "React.js", level: 88 },
    { name: "Next.js", level: 84 },
    { name: "Node.js", level: 82 },
    { name: "Tailwind CSS", level: 90 },
    { name: "FastAPI", level: 80 },
    { name: "HTML / CSS", level: 92 },
  ],
  aiMl: [
    { name: "Machine Learning", level: 85 },
    { name: "LLMs & GenAI", level: 82 },
    { name: "NLP", level: 78 },
    { name: "XGBoost", level: 80 },
    { name: "Pandas / NumPy", level: 90 },
    { name: "Matplotlib", level: 85 },
  ],
  databases: [
    { name: "MySQL", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "PostgreSQL", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Linux", level: 80 },
    { name: "Tableau", level: 75 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 85 },
    { name: "MATLAB", level: 70 },
  ],
};

export const projects = [
  {
    id: "credveda",
    title: "CredVeda — Credit Risk Analytics Platform",
    shortTitle: "CredVeda",
    tagline: "Real-time AI-driven credit intelligence with 78% model accuracy",
    description:
      "An AI-powered credit risk intelligence platform delivering real-time company health scores. Built an XGBoost classification engine with explainability features, a scalable REST API, and a React.js frontend with an AI chatbot interface — replicating production-quality fintech development.",
    features: [
      "XGBoost credit scoring with 78% accuracy",
      "Real-time financial event alerting",
      "AI chatbot interface for score transparency",
      "Anomaly detection on financial streams",
      "REST API with React.js frontend",
    ],
    tech: ["React.js", "Python", "XGBoost", "Tailwind CSS", "FastAPI"],
    category: "AI/ML",
    accentColor: "#38BDF8",
    period: "Aug 2025",
    github: "https://github.com/Harshitmaheshwari10",
    live: null,
    impact: "78% model accuracy",
  },
  {
    id: "nse-screener",
    title: "NSE Stock Market Screener",
    shortTitle: "NSE Screener",
    tagline: "Production-grade stock signal detection across all NSE-listed stocks",
    description:
      "A production-grade NSE stock screening platform scanning all NSE-listed stocks daily. Computes EMA 10 and Supertrend 10 crossover signals on weekly candlestick data, with a modular FastAPI backend, PostgreSQL schema, and a responsive Next.js dashboard with dark mode and real-time search.",
    features: [
      "Daily scan of all NSE-listed equities",
      "EMA 10 + Supertrend 10 crossover signals",
      "Interactive candlestick charts",
      "Sector / market-cap filters",
      "Real-time search & signal history",
      "Deployed on Vercel",
    ],
    tech: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "PostgreSQL", "pandas-ta"],
    category: "Full-Stack",
    accentColor: "#34D399",
    period: "May 2026",
    github: "https://github.com/Harshitmaheshwari10",
    live: null,
    impact: "Full NSE coverage",
  },
  {
    id: "market-entry",
    title: "Market Entry Decision via Predictive Modeling",
    shortTitle: "Market Intelligence",
    tagline: "Data-driven market analysis translating ML outputs into business decisions",
    description:
      "A business analytics solution leveraging predictive modeling to evaluate market potential, forecast sales, and quantify risks for strategic market-entry decisions. Built automated data pipelines and Tableau dashboards that translate complex model outputs into actionable business intelligence.",
    features: [
      "Predictive market potential scoring",
      "Sales forecasting pipeline",
      "Risk quantification framework",
      "Automated ETL data pipelines",
      "Tableau visualization dashboards",
    ],
    tech: ["Python", "Tableau", "Excel", "Pandas", "Scikit-learn"],
    category: "Data Science",
    accentColor: "#818CF8",
    period: "Aug 2025",
    github: "https://github.com/Harshitmaheshwari10",
    live: null,
    impact: "Business intelligence",
  },
  {
    id: "vehicle-security",
    title: "Smart Vehicle Security — Geofencing & IoT",
    shortTitle: "IoT Geofencing",
    tagline: "Patent-pending GPS geofencing system with 99% operational accuracy",
    description:
      "An IoT-based vehicle security system using GPS geofencing to track real-time location and automatically control ignition on boundary breach — achieving 99% operational accuracy. Integrated GSM modules for real-time alert delivery. Patent filed (in process) for the geofencing architecture.",
    features: [
      "GPS geofencing with 99% accuracy",
      "Automatic ignition control on breach",
      "GSM real-time alert delivery",
      "End-to-end embedded systems design",
      "Patent filed (in process)",
    ],
    tech: ["Arduino", "GPS Module", "GSM Module", "Relay Module", "Embedded C"],
    category: "IoT",
    accentColor: "#F59E0B",
    period: "Aug 2024",
    github: "https://github.com/Harshitmaheshwari10",
    live: null,
    impact: "Patent pending",
  },
];

export const experience = [
  {
    role: "Data Science with AI Training",
    company: "Internshala",
    type: "Virtual Training",
    period: "Aug 2024 – Oct 2024",
    highlights: [
      "Completed intensive hands-on training in data science, ML, and AI with practical model building.",
      "Developed a capstone project applying AI/ML to a real-world business problem with end-to-end pipelines.",
      "Integrated AI tools and APIs to automate analysis workflows and reinforce AI-assisted development practices.",
    ],
  },
];

export const achievements = [
  {
    title: "Dean's List of Excellence ×6",
    org: "Manipal University Jaipur",
    desc: "Maintained GPA above 9.0 across six consecutive semesters.",
    icon: "trophy",
    color: "#F59E0B",
  },
  {
    title: "Level 2 Qualifier",
    org: "Deloitte Hacsplosion Hackathon",
    desc: "Advanced through competitive rounds by delivering a functional technical solution under high-pressure engineering constraints.",
    icon: "zap",
    color: "#38BDF8",
  },
  {
    title: "Smart India Hackathon Participant",
    org: "Government of India",
    desc: "Developed scalable software solutions for national-level engineering challenges.",
    icon: "flag",
    color: "#34D399",
  },
  {
    title: "Patent Filing (In Process)",
    org: "Geofencing-based Smart Vehicle Security System",
    desc: "Filed patent for novel GPS geofencing architecture covering full engineering lifecycle from prototype to formal IP submission.",
    icon: "shield",
    color: "#818CF8",
  },
];

export const certifications = [
  {
    title: "OCI Generative AI",
    org: "Oracle",
    year: "2024",
    color: "#F59E0B",
  },
  {
    title: "OCI Data Science",
    org: "Oracle",
    year: "2024",
    color: "#F59E0B",
  },
  {
    title: "Data Science with AI",
    org: "Internshala",
    year: "2024",
    color: "#38BDF8",
  },
  {
    title: "DSA in C++",
    org: "Apna College",
    year: "2024",
    color: "#34D399",
  },
  {
    title: "CSS Intermediate",
    org: "HackerRank",
    year: "2024",
    color: "#818CF8",
  },
  {
    title: "SQL Intermediate",
    org: "HackerRank",
    year: "2024",
    color: "#818CF8",
  },
  {
    title: "Operating System",
    org: "Red Hat Academy",
    year: "2024",
    color: "#EF4444",
  },
  {
    title: "Accenture Gold Aspire",
    org: "Accenture",
    year: "2024",
    color: "#A78BFA",
  },
];

export const stats = [
  { label: "GPA", value: "9.28", suffix: "/10" },
  { label: "Dean's List", value: "6", suffix: "×" },
  { label: "Projects Built", value: "4", suffix: "+" },
  { label: "Certifications", value: "8", suffix: "" },
];
