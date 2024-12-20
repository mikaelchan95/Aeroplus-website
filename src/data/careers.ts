import { Building2, Code, LineChart, Globe } from 'lucide-react';
import type { Department } from '../types/careers';

export const departments: Department[] = [
  {
    name: 'Technology',
    icon: Code,
    positions: [
      {
        id: 'senior-frontend-dev',
        title: 'Senior Frontend Developer',
        location: 'Singapore',
        type: 'Full-time',
        description: 'Join our team to build next-generation payment solutions using React and TypeScript.',
        tags: ['React', 'TypeScript', 'Payment Systems'],
        requirements: [
          "Bachelor degree in Computer Science or related field",
          '5+ years of frontend development experience',
          'Strong TypeScript and React skills',
          'Experience with payment systems'
        ],
        responsibilities: [
          'Lead frontend development initiatives',
          'Mentor junior developers',
          'Implement best practices and standards',
          'Collaborate with product and design teams'
        ]
      }
    ]
  },
  {
    name: 'Finance',
    icon: LineChart,
    positions: [
      {
        id: 'financial-analyst',
        title: 'Financial Analyst',
        location: 'Hong Kong',
        type: 'Full-time',
        description: 'Support our financial planning and analysis team in driving business growth.',
        tags: ['Financial Analysis', 'Reporting', 'Aviation'],
        requirements: [
          "Bachelor degree in Finance or related field",
          '3+ years of financial analysis experience',
          'Strong Excel and modeling skills',
          'Knowledge of aviation industry'
        ],
        responsibilities: [
          'Prepare financial reports and analysis',
          'Support budgeting and forecasting',
          'Analyze industry trends',
          'Develop financial models'
        ]
      }
    ]
  }
];