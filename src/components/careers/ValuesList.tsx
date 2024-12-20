import React from 'react';
import { Target, Shield, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We push boundaries and embrace new ideas to drive industry transformation.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency and maintain the highest ethical standards.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together across teams and borders to achieve shared goals.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for exceptional quality in everything we do.'
  }
];

export default function ValuesList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <div key={index} className="bg-white p-8 shadow-lg group hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
            <value.icon className="h-6 w-6 text-navy-900 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-navy-900 mb-3">
            {value.title}
          </h3>
          <p className="text-gray-600">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}