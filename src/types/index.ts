export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  technologies: string[];
  liveUrl?: string;
  liveUrlText?: string;
  statusNote?: string;
  client?: string;
  architectureHighlights?: string[];
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
