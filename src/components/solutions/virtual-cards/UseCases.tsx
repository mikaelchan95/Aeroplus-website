import React from 'react';
import type { UseCase } from '../../../types/solutions';

interface UseCasesProps {
  useCases: UseCase[];
}

export default function UseCases({ useCases }: UseCasesProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {useCases.map((useCase, index) => (
        <div key={index} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
          <h3 className="text-xl font-bold text-white mb-4">
            {useCase.title}
          </h3>
          <p className="text-gray-300 mb-6">
            {useCase.description}
          </p>
          <ul className="space-y-3">
            {useCase.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mr-3" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}