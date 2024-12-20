import React from 'react';
import { Users2, Trophy, Target } from 'lucide-react';

const highlights = [
  {
    icon: Users2,
    title: 'Global Leadership',
    description: 'Experienced executives with proven track records across aviation and finance'
  },
  {
    icon: Trophy,
    title: 'Industry Recognition',
    description: 'Award-winning team driving innovation in aviation finance and technology'
  },
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'Forward-thinking approach to transforming the aviation industry'
  }
];

export function TeamHighlights() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {highlights.map((highlight, index) => (
        <div key={index} className="bg-white p-8 shadow-lg group hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
            <highlight.icon className="h-6 w-6 text-navy-900 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-navy-900 mb-3">
            {highlight.title}
          </h3>
          <p className="text-gray-600">
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  );
}