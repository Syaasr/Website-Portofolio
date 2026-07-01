export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;

}

export interface HeroInfo {
  headline: string;
  subheadline: string;
  cta: string;
  resumeUrl: string;
}

export interface AboutInfo {
  story: string;
  stats: {
    gpa: string;
    projects: string;
    experience: string;
  };
}

export interface LanguageSpoken {
  name: string;
  level: string;
}

export interface SkillsInfo {
  topSkills: string[];
  languagesSpoken: LanguageSpoken[];
  languages: string[];
  web: string[];
  robotics: string[];
  tools: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface EducationItem {
  university: string;
  degree: string;
  period: string;
  coursework: string[];
  gpa: string;
}

export interface CertificationItem {
  name: string;
  platform: string;
  year: string;
}

export interface AchievementItem {
  title: string;
  event: string;
  year: string;
  description: string;
}

export interface BlogItem {
  title: string;
  summary: string;
  tags: string[];
  link: string;
}

export interface SocialsInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  linkRepo: string;
  linkDemo?: string;
  category?: string;
  imagePath?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  hero: HeroInfo;
  about: AboutInfo;
  skills: SkillsInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
  blog: BlogItem[];
  socials: SocialsInfo;
}
