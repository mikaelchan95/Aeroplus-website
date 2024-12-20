import { Link2, LineChart, Workflow, Building2, Globe, Shield, Users } from 'lucide-react';
import type { Feature, Benefit } from '../types/solutions';

export const features: Feature[] = [
  {
    title: 'Payment Orchestration',
    description: 'Streamlined payment flows across multiple providers and channels.',
    items: [
      'Multi-provider integration',
      'Automated routing',
      'Real-time settlement',
      'Cross-border payments'
    ]
  },
  {
    title: 'Data Integration',
    description: 'Comprehensive data synchronization and analytics capabilities.',
    items: [
      'API-first architecture',
      'Real-time reporting',
      'Advanced analytics',
      'Custom dashboards'
    ]
  },
  {
    title: 'Capital Management',
    description: 'Optimized working capital and cash flow solutions.',
    items: [
      'Supply chain financing',
      'Dynamic discounting',
      'Early payment programs',
      'Invoice factoring'
    ]
  }
];

export const benefits: Benefit[] = [
  {
    icon: Link2,
    title: 'Seamless Integration',
    description: 'End-to-end payment and data integration across the entire supply chain ecosystem.'
  },
  {
    icon: LineChart,
    title: 'Capital Optimization',
    description: 'Improved cash flow management and working capital efficiency through integrated solutions.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automated payment orchestration and reconciliation reducing manual intervention.'
  },
  {
    icon: Building2,
    title: 'Supplier Network',
    description: 'Access to an extensive network of verified suppliers and service providers.'
  }
];

export const integrationPartners = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Integration with major international payment networks and financial institutions'
  },
  {
    icon: Shield,
    title: 'Security Standards',
    description: 'Compliance with international security and regulatory requirements'
  },
  {
    icon: Users,
    title: 'Partner Network',
    description: 'Extensive ecosystem of verified suppliers and service providers'
  }
];