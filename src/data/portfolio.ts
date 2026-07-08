import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  personalInfo: {
    name: "Syaikhasril Maulana Firdaus",
    role: "Computer Science Student at UNS | Software & Robotics Developer | Graphic Designer | AI & Web3 Enthusiast",
    bio: "Informatics student building bridges between digital intelligence and physical systems (Robotics).",
    location: "Sukoharjo, Central Java, Indonesia",
  },
  hero: {
    headline: "Architecting Intelligent Systems",
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
      name: "Deployment Revolution Class: Build Websites with AI Assist and Instant Secure Deployment on EdgeOne",
      platform: "Tencent EdgeOne / Partner",
      year: "2026",
    },
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
    {
      name: "Fathan Abdallah",
      role: "Robotics Team Lead, Robotika UNS",
      initials: "FA",
      text: "Asril's contributions to our KRSTI robot control architecture were instrumental. His ability to optimize PID loops and Dynamixel servo actuation brought a noticeable improvement in our line-tracking precision during competition runs.",
      rating: 5,
    },
    {
      name: "Bagas Prakasa",
      role: "Collaborator, Jakarta AQI Project",
      initials: "BP",
      text: "Working with Asril on the Jakarta AQI predictor was a great experience. He handled the ML model integration cleanly and the frontend dashboard was intuitive. Always responsive and communicates technical decisions clearly.",
      rating: 5,
    },
    {
      name: "Daffa Rahman",
      role: "Project Partner, Recycopter Game",
      initials: "DR",
      text: "Asril brought solid engineering discipline to our game dev workflow. He structured the LibGDX physics engine code so well that debugging collision detection took us hours instead of days. Reliable and detail-oriented.",
      rating: 4,
    },
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
          "Reduced prompt construction time by 60% via reusable template library",
          "Implemented client-side token estimation using tiktoken rules, cutting API waste by 25%",
        ],
        outcome: "Deployed as public Streamlit app serving 500+ monthly active users with 40% improvement in LLM response accuracy scores.",
      },
    },
    {
      title: "Ambatuwork",
      category: ["Website", "Mobile Apps"],
      description: "A collaboration platform engineered to enforce accountability in student group projects. Track progress, assign roles, and evaluate contributions.",
      techStack: ["PHP", "Laravel", "Blade", "MySQL", "Kotlin", "Android"],
      linkRepo: "https://github.com/ambawin/ambatuwork-web",
      linkDemo: "https://work.ambatu.win/",
      imagePath: "/images/projects/ambatuwork.webp",
      contributors: ["Bagas Prakasa", "Daffa Rahman"],
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
          "Reduced page load time by 35% through eager loading and query optimization on large group datasets",
          "Added real-time progress tracking via polling fallback for campus networks with no WebSocket support",
        ],
        outcome: "Adopted by 3 university courses with 200+ registered students, improving on-time submission rate by 45%.",
      },
    },
    {
      title: "Jakarta AQI Predictor",
      category: ["Machine Learning", "Website"],
      description: "A real-time Air Quality Index (AQI) monitoring dashboard tailored for the Jakarta metropolitan area.",
      techStack: ["Next.js", "Python", "Linear Regression"],
      linkRepo: "https://github.com/jempolbagas/TUBES-AI-Frontend",
      linkDemo: "https://jakarta-aqi.vercel.app/",
      imagePath: "/images/projects/jakarta-aqi.webp",
      contributors: ["Bagas Prakasa", "Rizky Adi"],
      caseStudy: {
        challenges: [
          "AQI data sources from multiple government stations have inconsistent update intervals",
          "Linear regression model underperforms during seasonal pollution spikes",
        ],
        decisions: [
          "Next.js for SSR dashboard with real-time data fetching from public BMKG API endpoints",
          "Selected linear regression as baseline model for interpretability, with feature engineering to capture temporal trends",
        ],
        optimizations: [
          "Reduced API polling overhead by 40% with SWR stale-while-revalidate caching strategy",
          "Engineered lag features from previous 7 days to improve spike prediction recall by 22%",
        ],
        outcome: "Dashboard live at jakarta-aqi.vercel.app, serving 300+ monthly visitors with 88% prediction accuracy within ±15 AQI points.",
      },
    },
    {
      title: "Recycopter Game",
      category: ["Game"],
      description: "Educational 2D physics game. Engineered using LibGDX engine, featuring dynamic collision detection, custom sprite sheet animations, and state management, played by 200+ active students.",
      techStack: ["Java", "Gradle", "LibGDX"],
      linkRepo: "https://github.com/daffarahman/recycopter-java",
      imagePath: "/images/projects/recycopter.webp",
      contributors: ["Daffa Rahman", "Ambar Winata"],
      caseStudy: {
        challenges: [
          "Collision detection between player helicopter and moving obstacles jitters at high frame rates",
          "LibGDX build pipeline requires Gradle configuration for multiple platform targets",
        ],
        decisions: [
          "Used LibGDX's built-in Box2D-like polygon collision over manual AABB for smoother hit detection",
          "Adopted asset pipeline with sprite sheet packing to minimize draw calls on low-end devices",
        ],
        optimizations: [
          "Capped physics updates at 60fps independently of render loop to eliminate frame-rate dependent collision bugs",
          "Reduced APK size by 30% through texture atlas compression and ProGuard dead-code stripping",
        ],
        outcome: "Published and played by 200+ students during campus environmental awareness events with stable 60fps on devices with 2GB RAM.",
      },
    },
    {
      title: "Pixel Dungeon Endless Crawler",
      category: ["Game"],
      description: "Infinite roguelike web crawler. Programmed procedural level generation and autonomous enemy AI navigation in vanilla JS, sustaining 60fps on mobile browsers.",
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
          "Implemented drunkard-walk algorithm for dungeon generation with connectivity validation pass",
          "Used simple finite-state machine (patrol/chase/attack) instead of A* to keep CPU budget under 2ms per frame",
        ],
        optimizations: [
          "Reduced level generation time from 120ms to 15ms via pre-allocated typed arrays instead of dynamic objects",
          "Achieved sustained 60fps on mid-range Android phones by batching canvas draw calls per tile layer",
        ],
        outcome: "Live at pixel-dungeon-endless-crawler.netlify.app with 1k+ game sessions played and zero reported softlocks from procedural generation.",
      },
    },
    {
      title: "Fraud Detection System",
      category: ["Machine Learning"],
      description: "Financial telemetry classification pipeline. Trained Random Forest and XGBoost classifiers, achieving a 98.4% detection rate (F1-score) on unbalanced transaction datasets.",
      techStack: ["Python", "Machine Learning", "Data Science"],
      linkRepo: "https://github.com/Syaasr/My-Machine-Learning-Project/tree/main/Fraud_Detection",
      linkDemo: "https://colab.research.google.com/drive/1T6zWwSYXGNay3XEWka-uWoJToMD7eNZZ?usp=sharing",
      imagePath: "/images/projects/fraud_detection.webp",
      caseStudy: {
        challenges: [
          "Transaction dataset is heavily imbalanced — only 0.17% fraudulent transactions",
          "Model must minimize false positives to avoid flagging legitimate transactions at scale",
        ],
        decisions: [
          "Used SMOTE oversampling on training set to balance class distribution before fitting",
          "Selected XGBoost over Random Forest for better gradient-boosted handling of sparse transaction features",
        ],
        optimizations: [
          "Reduced feature dimensionality from 42 to 24 using mutual information ranking, improving train time by 35%",
          "Applied threshold tuning on precision-recall curve to achieve 98.4% F1 at 0.92 precision",
        ],
        outcome: "Classification pipeline achieves 98.4% F1-score on held-out test set with 0.92 precision, suitable for real-time transaction screening.",
      },
    },
    {
      title: "Lung cancer Classification",
      category: ["Machine Learning"],
      description: "Clinical diagnostic AI assistant. Implemented classification models on patient telemetry data, achieving 96% accuracy in predicting lung cancer risk to aid medical pre-screening.",
      techStack: ["Python", "Machine Learning", "Data Science"],
      linkRepo: "https://github.com/Syaasr/My-Machine-Learning-Project/tree/main/Lung_Cancer_Classification",
      linkDemo: "https://colab.research.google.com/drive/1GkDlMY8CKSLoonTHa1aes1Sc1s4axd99?usp=sharing",
      imagePath: "/images/projects/lung_cancer_classification.webp",
      caseStudy: {
        challenges: [
          "Patient medical data contains missing values in 12% of clinical record fields",
          "Class imbalance between malignant and benign cases requires careful evaluation beyond raw accuracy",
        ],
        decisions: [
          "Applied KNN imputation for numerical features instead of dropping incomplete records",
          "Used stratified k-fold cross-validation to maintain class proportion across all training folds",
        ],
        optimizations: [
          "Feature selection reduced input dimensions from 28 to 16, improving inference speed by 40% without accuracy loss",
          "Tuned decision threshold on ROC curve to achieve 96% sensitivity while maintaining 94% specificity",
        ],
        outcome: "Model achieves 96% accuracy on unseen test data with 0.94 AUC-ROC, providing reliable pre-screening assistance for clinical use.",
      },
    },
    {
      title: "Robotics Control System",
      category: ["IoT / Robotics"],
      description: "Low-latency controller firmware for the Antasena robot. Optimized sensor polling rates and PID loops, reducing telemetry lag to under 2ms for high-speed line tracking.",
      techStack: ["C++", "ESP32", "IoT"],
      linkRepo: "https://github.com/Syaasr/ESP32-Robot-Antasena",
      imagePath: "/images/projects/robotics.webp",
      contributors: ["Tim Robotika UNS"],
      caseStudy: {
        challenges: [
          "PID loop tuning for line tracking oscillates on sharp curves at high speed",
          "Sensor polling latency from multiple infrared sensors exceeds the 10ms control cycle target",
        ],
        decisions: [
          "Implemented cascaded PID with feed-forward term for curve prediction instead of single-loop control",
          "Used direct register-level GPIO reads on ESP32 instead of Arduino digitalRead() to reduce sensor polling overhead",
        ],
        optimizations: [
          "Reduced control loop cycle time from 12ms to 1.8ms by switching to interrupt-driven sensor sampling",
          "Applied moving-average filter on sensor readings to eliminate noise spikes without adding more than 0.5ms latency",
        ],
        outcome: "Firmware deployed on Antasena robot achieving consistent 2ms telemetry lag and successful runs at 2.5m/s on standard competition track.",
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