import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  items: string[];
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  benefits: string[];
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}