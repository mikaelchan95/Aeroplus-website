import { Wallet, Shield, Smartphone, Lock } from 'lucide-react';
import type { Feature, Benefit, UseCase } from '../types/solutions';

export const features: Feature[] = [
  {
    title: 'Mobile Wallet Access',
    description: 'Instant virtual card deployment to mobile wallets for immediate use.',
    items: [
      'Apple Pay & Google Pay integration',
      'Real-time card provisioning',
      'Secure biometric authentication'
    ]
  },
  {
    title: 'Spend Management',
    description: 'Comprehensive controls and visibility over corporate spending.',
    items: [
      'Custom spending limits',
      'Merchant category restrictions',
      'Real-time transaction alerts'
    ]
  },
  {
    title: 'Global Acceptance',
    description: 'Worldwide acceptance through major payment networks.',
    items: [
      'International payment support',
      'Multi-currency capabilities',
      'Local payment processing'
    ]
  }
];

export const benefits: Benefit[] = [
  {
    icon: Wallet,
    title: 'Flexible Payment Options',
    description: 'Support for both single-use and recurring virtual cards with customizable spending limits.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced fraud prevention with unique card numbers and real-time transaction monitoring.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description: 'Seamless mobile wallet access for convenient payments on the go.'
  },
  {
    icon: Lock,
    title: 'Controlled Spending',
    description: 'Set precise spending limits, merchant categories, and validity periods.'
  }
];

export const useCases: UseCase[] = [
  {
    title: 'Travel & Entertainment',
    description: 'Streamline corporate travel expenses with dedicated virtual cards for each trip.',
    benefits: ['Simplified reconciliation', 'Enhanced security', 'Automated expense reporting']
  },
  {
    title: 'Procurement',
    description: 'Generate unique virtual cards for vendor payments and procurement processes.',
    benefits: ['Vendor-specific cards', 'Automated payments', 'Detailed transaction data']
  },
  {
    title: 'Subscription Management',
    description: 'Manage recurring payments and subscriptions with dedicated virtual cards.',
    benefits: ['Subscription tracking', 'Automated renewals', 'Spend optimization']
  }
];