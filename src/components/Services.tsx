import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Globe, Shield, Building2, ChevronRight, Plane, LineChart, Users } from 'lucide-react';

const solutions = [
  {
    icon: Plane,
    title: 'Travel Payment Innovation',
    description: 'Centralized hotel payments system eliminating individual expenses and corporate credit cards while providing complete control.',
    features: ['Direct Settlement', 'Automated Reconciliation', 'Post-paid Experience']
  },
  {
    icon: CreditCard,
    title: 'Virtual Card Solutions',
    description: 'Integrated virtual card system supporting both single-use and recurring payment options for enhanced flexibility.',
    features: ['Mobile Wallet Access', 'Controlled Spending', 'Global Acceptance']
  },
  {
    icon: Building2,
    title: 'Supply Chain Integration',
    description: 'Seamless payment and data integration across the supply chain, optimizing capital management and efficiency.',
    features: ['Payment Orchestration', 'Data Integration', 'Capital Optimization']
  },
  {
    icon: LineChart,
    title: 'Technology Infrastructure',
    description: 'Built on secure, scalable foundations with core banking infrastructure and open banking capabilities.',
    features: ['API Integration', 'Multiple Payment Rails', 'Enhanced Security']
  }
];

export default function Services() {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-navy-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="h-5 w-5 text-airbus-gold" />
            <span className="text-airbus-gold font-medium">Our Solutions</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Next Generation Corporate Payment Solutions
          </h2>
          <p className="text-lg text-gray-300">
            Launching in 2025: Revolutionizing corporate travel and payment solutions with integrated technology and seamless experiences.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center">
                  <solution.icon className="h-8 w-8 text-airbus-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  {solution.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 py-6 border-t border-white/10">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <div className="flex justify-end">
                  <Link 
                    to={index === 0 ? '/solutions/travel-payment' : 
                        index === 1 ? '/solutions/virtual-cards' : '#'}
                    className="group/btn flex items-center text-white hover:text-airbus-gold transition-colors text-lg"
                  >
                    Learn more
                    <ChevronRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-airbus-gold text-navy-900 hover:bg-airbus-gold/90 transition-colors group">
            <span>Discuss Your Requirements</span>
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}