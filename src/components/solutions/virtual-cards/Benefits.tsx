import React from 'react';
import type { Benefit } from '../../../types/solutions';

interface BenefitsProps {
  benefits: Benefit[];
}

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-navy-900 mb-6">
          Transform Your Corporate Payments
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Our virtual card solutions provide unprecedented control, security, and 
          flexibility for modern business payments.
        </p>
        <div className="grid gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-navy-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
          alt="Virtual Card Solutions"
          className="rounded-lg shadow-xl"
        />
        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-airbus-gold/10 -z-10" />
        <div className="absolute -top-6 -left-6 w-64 h-64 bg-navy-900/10 -z-10" />
      </div>
    </div>
  );
}