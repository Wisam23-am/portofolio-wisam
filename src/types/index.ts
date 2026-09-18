export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  period: string;
  techStack: string[];
  category: 'Full Stack' | 'Mobile App' | 'DevOps & Systems' | 'Cloud & API';
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string[];
  challenges?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  icon: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Education';
  description: string[];
  technologies: string[];
  featured?: boolean;
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  timezone: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
}
