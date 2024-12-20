import React from 'react';
import { Building2, Globe, Shield, Users, ArrowRight, History, Target, Award, ChevronRight } from 'lucide-react';
import LocationsGrid from '../components/LocationsGrid';

const highlights = [
  {
    icon: Building2,
    title: 'Global Presence',
    description: 'Headquartered in Hong Kong with strategic operations in Singapore, and presence across Asia.'
  },
  {
    icon: Globe,
    title: 'Industry Pioneer',
    description: 'Setting new standards in corporate travel payment innovation since 2018.'
  },
  {
    icon: Users,
    title: 'Strategic Partners',
    description: 'Strong network across Europe, USA, Japan, and Southeast Asia.'
  },
  {
    icon: Award,
    title: 'Innovation Leader',
    description: 'Pioneering integrated payment solutions for modern enterprises.'
  }
];

const stats = [
  { label: 'Countries', value: '9' },
  { label: 'Customers', value: '1,800+' },
  { label: 'Transaction Value', value: '$1.6B' },
  { label: 'Years Experience', value: '35+' }
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
              <Building2 className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Our Story</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Pioneering the Future of<br />
              <span className="text-airbus-gold">Aviation & Payment</span><br />
              Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From our roots in aviation to becoming a leader in travel technology and payment solutions,
              discover the journey that defines Aero Plus Group.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600">Serving clients worldwide from strategic locations</p>
          </div>

          <LocationsGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white group hover:bg-navy-900 transition-all duration-500">
                <div className="text-4xl font-bold text-navy-900 group-hover:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 group-hover:text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the next chapter in aviation and payment innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-airbus-gold text-navy-900 hover:bg-airbus-gold/90 transition-all group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/careers"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 transition-all group"
            >
              View Careers
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}