import { LucideIcon } from 'lucide-react';

export interface Position {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
  requirements: string[];
  responsibilities: string[];
}

export interface Department {
  name: string;
  icon: LucideIcon;
  positions: Position[];
}