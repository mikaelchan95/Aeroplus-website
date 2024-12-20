import React from 'react';
import { Building2, Globe, Users, Award, ArrowDown } from 'lucide-react';

const highlights = [
  {
    icon: Building2,
    title: 'Global Network',
    description: 'Established presence across Hong Kong, Singapore, and key Asian markets'
  },
  {
    icon: Globe,
    title: 'Industry Pioneer',
    description: 'Leading innovation in corporate travel and payment solutions since 2018'
  },
  {
    icon: Shield,
    title: 'Strategic Growth',
    description: 'Continuous expansion through strategic partnerships and market development'
  },
  {
    icon: Award,
    title: 'Innovation Leader',
    description: 'Leading aviation player in China\'s aviation industry'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Previous sections remain unchanged */}
      <div className="mt-20 text-center">
        <a
          href="#what-we-do"
          className="inline-flex items-center px-8 py-4 bg-airbus-gold text-navy-900 hover:bg-airbus-gold/90 transition-all group"
        >
          <span>Learn More About Our Journey</span>
          <ArrowDown className="ml-2 h-5 w-5 transform group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The development of China's first one-stop-services aviation asset trading platform has led Aero Plus to become the leading aviation player in China's aviation industry.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              By building up an "Aviation Asset Trading Platform + Aero Plus International" dual services platform, Aero Plus is able to spectrum the cross-border business networks, service functions and customers' portfolio to maximize the value creation for airports, airport owners and the neighboring cities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900">Full Aircraft Lifecycle Service</h3>
              <p className="text-gray-600">
                As a professional and global full aircraft life-cycle service provider, we offer comprehensive solutions for aircraft trading, management, and valuation. Our platform streamlines the entire lifecycle of aviation assets, from acquisition to retirement.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900">Brand Management Service</h3>
              <p className="text-gray-600">
                We provide strategic brand development and management services, helping aviation clients build and maintain strong market presence. Our expertise extends to marketing strategy, digital presence, and reputation management.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900">Financial Technology</h3>
              <p className="text-gray-600">
                Our innovative financial solutions cater specifically to the aviation industry, integrating modern technology with traditional financial services to create efficient, secure, and user-friendly payment and management systems.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900">Supply Chain Integration</h3>
              <p className="text-gray-600">
                We facilitate seamless integration across the aviation supply chain, connecting suppliers, manufacturers, and operators through our advanced platform, optimizing operations and reducing costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients include a wide range of well-known companies and institutions, coming from various industries, including national, regional and provincial governments and institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">State-owned Enterprises</h3>
              <p className="text-gray-600 mb-6">
                We help China's large state-owned enterprises, including aviation, high-tech, finance, real estate and agriculture to complete strategic transformations, organizational and management process re-engineering, and preparation for overseas listings.
              </p>
              <p className="text-gray-600">
                We have set up a global business roadmap for many SOE customers, including strategic setting, screening of M&A targets and M&A negotiations, and the integration of subsidiaries and parent companies with different corporate cultures after overseas M&A.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Private Enterprises</h3>
              <p className="text-gray-600 mb-6">
                We partner with private enterprises to optimize their operations, enhance their market presence, and facilitate their growth in the aviation sector. Our solutions are tailored to meet the unique needs and challenges of private businesses.
              </p>
              <p className="text-gray-600">
                From startups to established companies, we provide comprehensive support in areas such as strategic planning, operational efficiency, and market expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections remain unchanged */}
    </div>
  );
}