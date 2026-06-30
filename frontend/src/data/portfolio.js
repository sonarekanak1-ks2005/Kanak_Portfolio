// Centralized portfolio content for Kanak Sonare
export const PROFILE = {
  name: "Kanak Sonare",
  firstName: "Kanak",
  lastName: "Sonare",
  role: "AI/ML Engineer · Software Developer",
  university: "VIT Bhopal University",
  degree: "B.Tech CSE (AI & ML)",
  year: "4th Year",
  tagline:
    "Building intelligent systems through Artificial Intelligence, Machine Learning, and Software Engineering.",
  bio: "I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at VIT Bhopal University. I am passionate about developing intelligent systems, deep learning applications, and scalable software solutions. My interests span machine learning, cloud computing, web development, and data-driven technologies.",
  highlights: [
    "Team leadership",
    "Problem-solving",
    "Software engineering",
    "AI research interests",
  ],
  phone: "+91 8767043498",
  email: "sonarekanak1@gmail.com",
  location: "Nagpur, India",
  github: "https://github.com/sonarekanak1-ks2005",
  linkedin: "https://www.linkedin.com/in/kanak-sonare-01a45a1b1/",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_kanak-tech-hub/artifacts/y8irktl6_Kanak_cv2.pdf",
  photoUrl:
    "https://customer-assets.emergentagent.com/job_kanak-tech-hub/artifacts/gqu9vcj2_K2.jpg",
};

export const TYPING_ROLES = [
  "AI/ML Engineer",
  "Software Developer",
  "Deep Learning Enthusiast",
  "Cloud Computing Learner",
];

export const STATS = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Certifications", value: 7, suffix: "" },
  { label: "Events Organized", value: 10, suffix: "+" },
  { label: "Participation Lift", value: 170, suffix: "%" },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "Java", level: 80 },
      { name: "C++", level: 78 },
      { name: "SQL", level: 85 },
      { name: "HTML", level: 90 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 86 },
      { name: "React", level: 84 },
      { name: "Full Stack Development", level: 78 },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "CNN", level: 88 },
      { name: "LSTM", level: 82 },
      { name: "RNN", level: 80 },
      { name: "TensorFlow", level: 84 },
      { name: "Scikit-learn", level: 86 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    category: "Cloud Computing",
    items: [
      { name: "AWS Lambda", level: 76 },
      { name: "AWS RDS", level: 72 },
      { name: "AWS S3", level: 78 },
      { name: "Route53", level: 70 },
      { name: "CloudWatch", level: 72 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 78 },
      { name: "DBMS", level: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Docker", level: 72 },
      { name: "VS Code", level: 95 },
      { name: "XAMPP", level: 75 },
    ],
  },
];

export const PROJECTS = [
  {
    id: "p1",
    title: "Face Recognition Attendance System",
    summary:
      "Real-time face recognition for automated attendance management using OpenCV and CNN.",
    description:
      "Developed a real-time face recognition system for automated attendance management using OpenCV and CNN models. Implemented facial detection, feature extraction, and identity matching with over 90% accuracy.",
    stack: ["Python", "OpenCV", "CNN", "Flask"],
    features: [
      "Real-time face recognition",
      "Attendance logging",
      "Database integration",
      "Live monitoring dashboard",
    ],
    github: "https://github.com/sonarekanak1-ks2005",
    accent: "from-[#CCFF00]/30 to-transparent",
    year: "2025",
  },
  {
    id: "p2",
    title: "Stock Price Prediction using LSTM",
    summary:
      "LSTM-based deep learning model to predict stock market trends using historical data.",
    description:
      "Designed an LSTM-based deep learning model to predict stock market trends using historical financial data.",
    stack: ["Python", "TensorFlow", "Deep Learning"],
    features: [
      "Time-series forecasting",
      "Data preprocessing",
      "Hyperparameter tuning",
      "Visualization dashboard",
    ],
    github: "https://github.com/sonarekanak1-ks2005",
    accent: "from-[#22d3ee]/25 to-transparent",
    year: "2025",
  },
];

export const LEADERSHIP = [
  {
    role: "Finance Lead",
    org: "Android Club, VIT Bhopal",
    duration: "Sep 2024 — Mar 2026",
    achievements: [
      "Organized 10+ technical events",
      "Managed events with 500+ attendees",
      "Increased participation by 170%",
      "Managed sponsorships and budgeting",
      "Mentored junior students",
      "Led workshops and technical sessions",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech CSE (AI & ML)",
    school: "VIT Bhopal University",
    duration: "2023 — 2027",
    status: "Current",
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Centre Point School, Nagpur",
    duration: "2021 — 2023",
    status: "Completed",
  },
  {
    degree: "High School (Class X)",
    school: "Centre Point School, Nagpur",
    duration: "2020 — 2021",
    status: "Completed",
  },
];

export const CERTIFICATIONS = [
  { name: "Internet of Things", issuer: "NPTEL", year: "2026" },
  { name: "IT Support", issuer: "Google", year: "2026" },
  { name: "Cloud Computing", issuer: "NPTEL", year: "2025" },
  { name: "Generative AI", issuer: "IBM", year: "2025" },
  { name: "Fundamentals of Microsoft", issuer: "Microsoft", year: "2025" },
  { name: "Fundamentals of AI & ML", issuer: "Vityarthi", year: "2024" },
  { name: "Python Essentials", issuer: "Vityarthi", year: "2024" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
