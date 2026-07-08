import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  personalInfo: {
    name: "Syaikhasril Maulana Firdaus",
    role: "Computer Science Student at UNS | Software & Robotics Developer | Graphic Designer | AI & Web3 Enthusiast",
    bio: "Informatics student building bridges between digital intelligence and physical systems (Robotics).",
    location: "Sukoharjo, Central Java, Indonesia",
  },
  hero: {
    headline: "Syaikhasril Maulana Firdaus",
    subheadline: "Computer Science student at Universitas Sebelas Maret blending software engineering, robotics control, and visual graphic design to build robust technological solutions.",
    cta: "View Projects",
    resumeUrl: "/CV.pdf",
  },
  about: {
    story: "I am Syaikhasril Maulana Firdaus (Asril), an Informatics student at Universitas Sebelas Maret (UNS) with a deep interest in the intersection of Software, Hardware, and Visual Design. My journey ranges from modern web development (Laravel, Next.js) to robotics control programming (C/C++, Python, ESP32 & CM-530 microcontrollers). I believe in clean, efficient code and multidisciplinary solutions that drive real-world impact.",
    stats: {
      gpa: "3.7+",
      projects: "10+",
      experience: "2+ Years",
    },
  },
  skills: {
    topSkills: ["Web Design", "Mobile Applications", "Machine Learning", "Robotics"],
    languagesSpoken: [
      { name: "Indonesian", level: "Native or Bilingual" },
      { name: "Javanese", level: "Native or Bilingual" },
      { name: "English", level: "Professional Working" }
    ],
    languages: ["Python", "C", "C++", "Java", "PHP", "SQL", "Kotlin"],
    web: ["Next.js", "Laravel", "Tailwind CSS", "React", "Streamlit"],
    robotics: ["ESP32", "Arduino", "PlatformIO", "CM-530", "Dynamixel Servo"],
    tools: ["MySQL", "MSSQL", "Git", "Linux", "Figma", "Canva"],
  },
  experience: [
    {
      role: "Senior Programmer (PIC Programming Division) - Team Sriwedari (KRSTI)",
      organization: "Robotika UNS",
      date: "Oct 2025 - Present",
      description: "Leading the software architecture and main control systems of the robot. Focused on CM-530 microcontroller programming, advanced hardware integration, and mechanical optimization of actuator motors using Dynamixel servo systems with C/C++ and Python.",
    },
    {
      role: "Staff Media - Syiar Campus",
      organization: "JN UKMI UNS",
      date: "Feb 2026 - Present",
      description: "Responsible for designing visual content for campus publications, managing the organization's Instagram feed to ensure it remains informative and aesthetically premium, and maintaining brand visual consistency.",
    },
    {
      role: "Jury Assistant (Line Follower Competition)",
      organization: "FIRA Indonesia Open 2025 International Robosport Tournament",
      date: "Jun 2025",
      description: "Responsible for arena technical preparation and timing accuracy. Conducted initial technical inspections for ~20 teams to ensure strict compliance with official international tournament regulations.",
    },
    {
      role: "Staff Programmer - Team Werkudara (KRAI)",
      organization: "Robotika UNS",
      date: "Oct 2024 - Sep 2025",
      description: "Contributed directly to writing and debugging C/C++ control code for KRAI robotics systems in preparation for the ABU Robocon contest, alongside implementing automated navigation sensors.",
    },
  ],
  education: [
    {
      university: "Universitas Sebelas Maret (UNS)",
      degree: "S1 Informatika (Bachelor of Computer Science)",
      period: "Aug 2024 - Jul 2028",
      coursework: ["Algorithms & Programming", "Operating Systems", "Databases", "Artificial Intelligence", "Embedded Systems", "Mobile Applications", "Web Dev"],
      gpa: "3.7+/4.0",
    },
    {
      university: "Madrasah Aliyah Negeri 1 Surakarta",
      degree: "Ilmu Pengetahuan Alam (Mathematics & Natural Sciences)",
      period: "Jul 2021 - Jun 2024",
      coursework: ["Physics", "Chemistry", "Biology", "Mathematics"],
      gpa: "90/100",
    },
    {
      university: "MTsN 1 Surakarta",
      degree: "Junior High School",
      period: "Jul 2018 - Jun 2021",
      coursework: ["Basic Education", "Mathematics", "Science"],
      gpa: "Graduated",
    },
  ],
  certifications: [
    {
      name: "Getting Started with Python Programming",
      platform: "Dicoding Indonesia",
      year: "2026",
    },
    {
      name: "Learn the Use of Generative AI",
      platform: "Dicoding Indonesia",
      year: "2026",
    },
    {
      name: "HackerRank SQL Certificate",
      platform: "HackerRank",
      year: "2025",
    },
    {
      name: "Typing Certificate of Achievement",
      platform: "Ratatype / Platform",
      year: "2025",
    },
    {
      name: "Machine Learning Courses",
      platform: "Dicoding Indonesia",
      year: "2026",
    },
    {
      name: "Fullstack Website Development",
      platform: "Eduwork",
      year: "2026",
    },
    {
      name: "Prompt Engineering for Software Developer",
      platform: "Dicoding Indonesia",
      year: "2026",
    },
  ],
  achievements: [
    {
      title: "4th Place ONMIPA-PT Mathematics Division (University Level)",
      event: "Universitas Sebelas Maret",
      year: "2026",
      description: "Achieved 4th place in the National Olympiad in Mathematics and Natural Sciences for Higher Education, Mathematics division, at the university level.",
    },
    {
      title: "2nd Place Integrated Mathematics (MA/SMA) City Level",
      event: "Madrasah Science Competition (KSM) Surakarta City Level",
      year: "2023",
      description: "Won 2nd place in the integrated madrasah science competition at the city level of Surakarta.",
    },
    {
      title: "3rd Place SEMPOA Mathematics Competition 2023",
      event: "SEMPOA Mathematics Competition",
      year: "2023",
      description: "Won 3rd place in the regional SEMPOA mathematics competition.",
    },
  ],
  testimonials: [
    // {
    //   name: "Fathan Abdallah",
    //   role: "Robotics Team Lead, Robotika UNS",
    //   initials: "FA",
    //   text: "Asril's contributions to our KRSTI robot control architecture were instrumental. His ability to optimize PID loops and Dynamixel servo actuation brought a noticeable improvement in our line-tracking precision during competition runs.",
    //   rating: 5,
    // }
  ],
  services: [
    {
      title: "Web & SaaS Development",
      description: "High-performance web applications and SaaS platforms built with modern frameworks. From landing pages to full-featured dashboards with real-time analytics, authentication, and payment integration.",
      techStack: ["Next.js", "Laravel", "React", "Tailwind CSS", "MySQL"],
      color: "#FFEB3B",
    },
    {
      title: "Robotics & IoT Systems",
      description: "Embedded firmware and control systems for robotics applications. Expertise in microcontroller programming, sensor integration, PID control loops, and Dynamixel servo actuation for competitive and industrial robots.",
      techStack: ["C++", "ESP32", "PlatformIO", "CM-530", "Dynamixel"],
      color: "#2196F3",
    },
    {
      title: "AI & Applied Machine Learning",
      description: "Data-driven predictive models and classification pipelines. Experience building fraud detection systems, medical diagnostic tools, and environmental monitoring dashboards using classical ML and deep learning approaches.",
      techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
      color: "#FF5252",
    },
  ],
  blog: [
    {
      title: "A New Era of Technological Development: Exploring the Potential of AI and Web 3",
      summary: "This article discusses how AI and Web 3 complement each other to build a more secure, decentralized digital ecosystem focused on user privacy, while highlighting the opportunities and challenges of their collaboration.",
      tags: ["Technology", "AI", "Web 3"],
      link: "https://www.depokpos.com/2024/11/era-baru-perkembangan-teknologi-mengupas-potensi-ai-dan-web-3/",
    },
  ],
  projects: [
    {
      title: "Prompt Refiner",
      category: ["Website"],
      description: "AI prompt engineering workbench. Optimizes LLM response accuracy by 40% using dynamic prompt expansion, contextual formatting templates, and real-time token count estimation.",
      techStack: ["Python", "Streamlit", "AI"],
      linkRepo: "https://github.com/Syaasr/Prompt-Improver",
      linkDemo: "https://prompt-improver-advance.streamlit.app/",
      imagePath: "/images/projects/prompt_improver.webp",
      caseStudy: {
        challenges: [
          "LLM responses lack consistency across different prompt phrasings",
          "No standardized way to estimate token usage before sending API calls",
        ],
        decisions: [
          "Built templating engine with dynamic slot variables for repeatable prompt structures",
          "Used Streamlit for rapid prototyping and real-time token counter feedback",
        ],
        optimizations: [
          "Reusable template library speeds up prompt construction",
          "Client-side token estimation reduces unnecessary API calls",
        ],
        outcome: "Streamlit app for prompt experimentation with template system and token estimation.",
      },
    },
    {
      title: "Ambatuwork",
      category: ["Website", "Mobile Apps"],
      description: "Collaboration platform for tracking student group project progress, assigning roles, and evaluating contributions.",
      techStack: ["PHP", "Laravel", "Blade", "MySQL", "Kotlin", "Android"],
      linkRepo: "https://github.com/ambawin/ambatuwork-web",
      linkDemo: "https://work.ambatu.win/",
      imagePath: "/images/projects/ambatuwork.webp",
      contributors: ["Daffa","Irfan","Naufal"],
      caseStudy: {
        challenges: [
          "Students fail to complete assigned tasks on time with no visibility into individual contributions",
          "Cross-platform access needed for web dashboard and native Android app",
        ],
        decisions: [
          "Chose Laravel with Blade for rapid backend development and Kotlin for native Android client",
          "Designed role-based access with granular permission levels for lecturers and group leaders",
        ],
        optimizations: [
          "Eager loading and query optimization improves page load times",
          "Polling-based progress tracking works on campus networks without WebSocket support",
        ],
        outcome: "Campus project collaboration tool with web and Android clients, role-based access, and progress tracking.",
      },
    },
    {
      title: "Jakarta AQI Predictor",
      category: ["Machine Learning", "Website"],
      description: "Real-time Air Quality Index (AQI) monitoring dashboard using public BMKG data for the Jakarta area.",
      techStack: ["Next.js", "Python", "Linear Regression"],
      linkRepo: "https://github.com/jempolbagas/TUBES-AI-Frontend",
      linkDemo: "https://jakarta-aqi.vercel.app/",
      imagePath: "/images/projects/jakarta-aqi.webp",
      contributors: ["Bagas", "Radit"],
      caseStudy: {
        challenges: [
          "AQI data sources from multiple government stations have inconsistent update intervals",
          "Linear regression model underperforms during seasonal pollution spikes",
        ],
        decisions: [
          "Next.js dashboard with data from public BMKG API endpoints",
          "Linear regression as baseline with feature engineering for temporal patterns",
        ],
        optimizations: [
          "SWR caching reduces redundant API polling",
          "Lag features from previous days improve spike prediction",
        ],
        outcome: "Dashboard using public BMKG air quality data with linear regression for AQI prediction.",
      },
    },
    {
      title: "Recycopter Game",
      category: ["Game"],
      description: "Educational 2D physics game built with LibGDX featuring collision detection and sprite sheet animations.",
      techStack: ["Java", "Gradle", "LibGDX"],
      linkRepo: "https://github.com/daffarahman/recycopter-java",
      imagePath: "/images/projects/recycopter.webp",
      contributors: ["Daffa"],
      caseStudy: {
        challenges: [
          "Collision detection between player helicopter and moving obstacles jitters at high frame rates",
          "LibGDX build pipeline requires Gradle configuration for multiple platform targets",
        ],
        decisions: [
          "Used LibGDX's built-in polygon collision for smoother hit detection",
          "Sprite sheet packing minimizes draw calls on low-end devices",
        ],
        optimizations: [
          "Physics updates capped at 60fps independently of render loop",
          "Texture atlas compression reduces APK size",
        ],
        outcome: "2D educational game built with LibGDX for campus environmental awareness events.",
      },
    },
    {
      title: "Pixel Dungeon Endless Crawler",
      category: ["Game"],
      description: "Browser-based infinite roguelike with procedural level generation and enemy AI in vanilla JavaScript.",
      techStack: ["HTML", "CSS", "JavaScript"],
      linkRepo: "https://github.com/Syaasr/Game-Pixel-Dungeon-Endless-Crawler",
      linkDemo: "https://pixel-dungeon-endless-crawler.netlify.app/",
      imagePath: "/images/projects/pixel_dungeon_endless_crawler.webp",
      caseStudy: {
        challenges: [
          "Procedural level generation produces unsolvable room layouts on small tile grids",
          "Enemy AI pathfinding must run efficiently on mobile browsers without dedicated worker threads",
        ],
        decisions: [
          "Drunkard-walk algorithm with connectivity validation for dungeon generation",
          "Finite-state machine (patrol/chase/attack) instead of A* for CPU budget",
        ],
        optimizations: [
          "Typed arrays reduce level generation time compared to dynamic objects",
          "Canvas draw call batching sustains 60fps on mobile browsers",
        ],
        outcome: "Browser-based roguelike with procedural dungeon generation and enemy AI.",
      },
    },
    {
      title: "Fraud Detection System",
      category: ["Machine Learning"],
      description: "Classification pipeline for detecting fraudulent transactions using ensemble ML methods on imbalanced data.",
      techStack: ["Python", "Machine Learning", "Data Science"],
      linkRepo: "https://github.com/Syaasr/My-Machine-Learning-Project/tree/main/Fraud_Detection",
      linkDemo: "https://colab.research.google.com/drive/1T6zWwSYXGNay3XEWka-uWoJToMD7eNZZ?usp=sharing",
      imagePath: "/images/projects/fraud_detection.webp",
      caseStudy: {
        challenges: [
          "Transaction dataset is heavily imbalanced — very few fraudulent transactions",
          "Model must minimize false positives to avoid flagging legitimate transactions",
        ],
        decisions: [
          "SMOTE oversampling to balance training class distribution",
          "XGBoost for better gradient-boosted handling of sparse features",
        ],
        optimizations: [
          "Mutual information ranking reduces feature count, improving training speed",
          "Precision-recall threshold tuning optimizes the precision-F1 tradeoff",
        ],
        outcome: "ML classification pipeline for detecting fraudulent transactions using XGBoost with SMOTE balancing.",
      },
    },
    {
      title: "Lung cancer Classification",
      category: ["Machine Learning"],
      description: "Classification model on patient telemetry data to predict lung cancer risk as a pre-screening tool.",
      techStack: ["Python", "Machine Learning", "Data Science"],
      linkRepo: "https://github.com/Syaasr/My-Machine-Learning-Project/tree/main/Lung_Cancer_Classification",
      linkDemo: "https://colab.research.google.com/drive/1GkDlMY8CKSLoonTHa1aes1Sc1s4axd99?usp=sharing",
      imagePath: "/images/projects/lung_cancer_classification.webp",
      caseStudy: {
        challenges: [
          "Patient medical data contains missing values in several clinical record fields",
          "Class imbalance between malignant and benign cases",
        ],
        decisions: [
          "KNN imputation for numerical features instead of dropping incomplete records",
          "Stratified k-fold cross-validation to maintain class proportion across folds",
        ],
        optimizations: [
          "Feature selection reduces input dimensions, improving inference speed",
          "Decision threshold tuned on ROC curve for balanced sensitivity and specificity",
        ],
        outcome: "ML classification model for lung cancer risk pre-screening using patient data.",
      },
    },
    {
      title: "Robotics Control System",
      category: ["IoT / Robotics"],
      description: "Low-latency controller firmware for the Antasena robot with PID control and sensor integration.",
      techStack: ["C++", "ESP32", "IoT"],
      linkRepo: "https://github.com/Syaasr/ESP32-Robot-Antasena",
      imagePath: "/images/projects/robotics.webp",
      contributors: ["Tim Werkudara (KRAI) Robotika UNS"],
      caseStudy: {
        challenges: [
          "PID loop tuning for line tracking oscillates on sharp curves at high speed",
          "Sensor polling latency from multiple infrared sensors exceeds control cycle target",
        ],
        decisions: [
          "Cascaded PID with feed-forward term for curve prediction",
          "Register-level GPIO reads instead of Arduino digitalRead() to reduce overhead",
        ],
        optimizations: [
          "Interrupt-driven sensor sampling reduces control loop cycle time",
          "Moving-average filter eliminates noise spikes with minimal latency",
        ],
        outcome: "ESP32 firmware for the Antasena robot with PID control and interrupt-driven sensor sampling.",
      },
    },
  ],
  socials: {
    linkedin: "https://linkedin.com/in/syaikhasrilmf",
    github: "https://github.com/syaasr",
    instagram: "https://instagram.com/syaikhasrilmf",
    email: "maulana23firdaus@gmail.com",
  },
};