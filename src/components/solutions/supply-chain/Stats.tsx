import React from 'react';
import type { Stat } from '../../../types/solutions';

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-8 bg-navy-900/5 group hover:bg-navy-900 transition-all duration-500">
          <div className="text-3xl font-bold text-navy-900 group-hover:text-white mb-2">
            {stat.value}
          </div>
          <div className="text-lg font-medium text-gray-900 group-hover:text-white/90 mb-1">
            {stat.label}
          </div>
          <div className="text-sm text-gray-600 group-hover:text-white/70">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
}