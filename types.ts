import { LucideIcon } from 'lucide-react';

export enum RoleType {
  WEB_DESIGNER = 'WEB_DESIGNER',
  DATA_ANALYST = 'DATA_ANALYST',
  MARKETING_PLANNER = 'MARKETING_PLANNER',
  SALES_ANALYST = 'SALES_ANALYST',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  metric?: string; // e.g., "+40% Conversion"
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'tool';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProfessionalProfile {
  id: RoleType;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  icon: LucideIcon;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  stats: { label: string; value: string }[];
}
