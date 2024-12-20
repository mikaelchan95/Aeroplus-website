import React from 'react';
import { Heart, Globe, BookOpen, Zap, Gem, Coffee } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive medical coverage and wellness programs for you and your family.'
  },
  {
    icon: Globe,
    title: 'Remote Work',
    description: 'Flexible work arrangements and ability to work from anywhere in the world.'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional development programs.'
  },
  {
    icon: Zap,
    title: 'Innovation Time',
    description: 'Dedicated time for personal projects and innovative initiatives.'
  },
  {
    icon: Gem,
    title: 'Competitive Package',
    description: 'Attractive compensation with performance bonuses and equity options.'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours and generous paid time off to recharge and enjoy life.'
  }
];

export default function BenefitsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-8 shadow-lg group hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
            <benefit.icon className="h-6 w-6 text-navy-900 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-navy-900 mb-3">
            {benefit.title}
          </h3>
          <p className="text-gray-600">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}