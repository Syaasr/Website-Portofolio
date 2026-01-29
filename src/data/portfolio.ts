export const portfolio = {
  personalInfo: {
    name: "Alex Sterling",
    role: "Informatics Student | Robotics | AI",
    bio: "Building the bridge between digital intelligence and physical systems.",
    location: "San Francisco, CA",
  },
  hero: {
    headline: "Architecting Intelligent Systems",
    subheadline: "I craft high-performance web applications and intelligent robotic control systems with a focus on efficiency and aesthetics.",
    cta: "View My Work",
  },
  about: {
    story: "I am a passionate Informatics student with a deep love for the intersection of software and hardware. My journey began with simple web scripts and evolved into complex machine learning models and autonomous robotics. I believe in clean code, scalable architecture, and user-centric design.",
    stats: {
      gpa: "3.9",
      projects: "15+",
      experience: "3 Years",
    },
  },
  skills: {
    languages: ["TypeScript", "Python", "C++", "Rust"],
    web: ["Next.js 15", "React", "Tailwind CSS", "Node.js"],
    ai: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn"],
    robotics: ["ROS2", "Arduino", "Raspberry Pi", "IoT Protocols"],
    tools: ["Docker", "Git", "Linux", "Figma"],
  },
  experience: [
    {
      role: "AI Research Intern",
      organization: "TechNova Labs",
      date: "Jun 2025 - Present",
      description: "Developing computer vision models for autonomous navigation systems.",
    },
    {
      role: "Full Stack Developer",
      organization: "Freelance",
      date: "Jan 2024 - May 2025",
      description: "Built scalable web applications for startups using Next.js and Supabase.",
    },
    {
      role: "Robotics Team Lead",
      organization: "University Robotics Club",
      date: "Sep 2023 - Dec 2024",
      description: "Led a team of 10 to design and build a competitive mars rover prototype.",
    },
  ],
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
      techStack: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
      linkRepo: "https://github.com/alexsterling/ecommerce-dash",
      linkDemo: "https://demo-ecommerce.alexsterling.dev",
      imagePath: "/images/projects/dashboard.webp",
    },
    {
      title: "Lung Cancer Classification",
      description: "Deep learning model utilizing CNNs to detect early-stage lung nodules from CT scan imagery with 94% accuracy.",
      techStack: ["Python", "PyTorch", "FastAPI", "Docker"],
      linkRepo: "https://github.com/alexsterling/cancer-classification",
      linkDemo: "https://huggingface.co/spaces/alexsterling/lung-cancer-p",
      imagePath: "/images/projects/lung-cancer.webp",
    },
    {
      title: "Robotics Control System",
      description: "IoT-based remote control interface for industrial robotic arms with sub-10ms latency.",
      techStack: ["C++", "ESP32", "MQTT", "React"],
      linkRepo: "https://github.com/alexsterling/robot-control",
      linkDemo: "#", // No live demo for hardware
      imagePath: "/images/projects/robotics.webp",
    },
  ],
  socials: {
    linkedin: "https://linkedin.com/in/alexsterling",
    github: "https://github.com/alexsterling",
    email: "alex@sterling.dev",
  },
};
