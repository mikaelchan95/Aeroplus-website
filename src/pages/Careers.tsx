import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import JobList from '../components/careers/JobList';
import BenefitsList from '../components/careers/BenefitsList';
import ValuesList from '../components/careers/ValuesList';
import { departments } from '../data/careers';

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
              <Briefcase className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Careers</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Mission to<br />
              Transform <span className="text-airbus-gold">Aviation &</span><br />
              Payment Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of a team that's revolutionizing the future of corporate travel and payments.
              We're looking for passionate individuals to help drive innovation forward.
            </p>

            <a 
              href="#open-positions" 
              className="inline-flex items-center px-8 py-4 bg-airbus-gold text-navy-900 hover:bg-airbus-gold/90 transition-all group"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Why Join Aero Plus?</h2>
            <p className="text-xl text-gray-600">Discover what makes us a great place to work</p>
          </div>

          <BenefitsList />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <ValuesList />
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next opportunity</p>
          </div>

          <div className="space-y-16">
            {departments.map((department, index) => (
              <JobList key={index} department={department} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}