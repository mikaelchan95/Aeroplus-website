import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { Feature } from '../../../types/solutions';

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-8 shadow-lg group hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold text-navy-900 mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-600 mb-6">
            {feature.description}
          </p>
          <ul className="space-y-3">
            {feature.items.map((item, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-airbus-gold mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}