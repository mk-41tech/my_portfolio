export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export type ProjectStatus = 'ongoing' | 'completed' | 'upcoming';

export interface ProjectItem {
  id: string;
  title: string;
  status: ProjectStatus;
  category: string;
  client?: string;
  description: string;
  shortDescription?: string;
  fullDescription?: string;
  keyHighlights: string[];
  features?: string[];
  technologies: string[];
  liveUrl?: string;
  liveUrlText?: string;
  isLive: boolean;
  statusNote?: string;
  architectureHighlights?: string[];
  productStructure?: string;
  phaseScope?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialConfig {
  name?: string;
  company?: string;
  designation?: string;
  testimonial?: string;
  rating?: number;
  photoUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDescription: string;
  budget?: string;
}
