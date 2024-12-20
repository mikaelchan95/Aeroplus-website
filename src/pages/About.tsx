import React from 'react';
import { Building2, Globe, Shield, Users, ArrowRight, History, Target, Award, ChevronRight, Plane, Building } from 'lucide-react';
import LocationsGrid from '../components/LocationsGrid';

const highlights = [
  {
    icon: Building2,
    title: 'Global Network',
    description: 'Established presence across Hong Kong, Singapore, and key Asian markets.'
  },
  {
    icon: Globe,
    title: 'Industry Pioneer',
    description: 'Leading innovation in corporate travel and payment solutions since 2018.'
  },
  {
    icon: Shield,
    title: 'Strategic Growth',
    description: 'Continuous expansion through strategic partnerships and market development.'
  },
  {
    icon: Award,
    title: 'Innovation Leader',
    description: 'Pioneering integrated payment solutions for modern enterprises.'
  }
];

const services = [
  {
    icon: Plane,
    title: 'Full Aircraft Lifecycle Service',
    description: 'Comprehensive aviation asset trading platform offering end-to-end services.'
  },
  {
    icon: Building,
    title: 'Brand Management Service',
    description: 'Strategic brand development and management for aviation clients.'
  },
  {
    icon: Shield,
    title: 'Financial Technology',
    description: 'Innovative financial solutions for the aviation industry.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
              <Building2 className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">About Aero Plus Group</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Pioneering the Future of<br />
              <span className="text-airbus-gold">Aviation & Payment</span><br />
              Solutions
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Founded in May 2018 in Hong Kong, Aero Plus International Holdings Limited ("Aero Plus") began in the aviation sector and evolved into a globally recognized provider of innovative travel industry solutions.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed">
              Over the last 6 years, Aero Plus has expanded its scope to include Full Aircraft Lifecycle Services, Brand Management, and Financial Technology. Through strategic partnerships and a continuously adaptive approach, the Group has established a strong leadership team in Singapore and built a global network across Europe, the USA, Japan, and Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Advancing Travel and Payment Innovations
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Aero Plus has gained recognition as a leader in corporate travel and payment solutions, notably through its groundbreaking efforts to centralize hotel payments in China. By automating hotel bookings, payments, and reconciliation—and introducing post-paid options for travelers—the company has significantly streamlined corporate travel processes.
                </p>
                <p className="text-lg text-gray-600">
                  Building on these successes, Aero Plus has expanded its expertise to include virtual card issuing, supported by in-house technology development, deep corporate travel experience, and strategic financial alliances. These enhancements position Aero Plus to further strengthen its presence in the business travel segment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
                alt="Innovation in Travel"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-airbus-gold/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-navy-900/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering comprehensive solutions across aviation, brand management, and financial technology sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 shadow-lg group hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
                  <service.icon className="h-6 w-6 text-navy-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Looking Ahead</h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-300">
                With a proven track record in corporate travel and payment sectors, Aero Plus is set to introduce its existing solutions to the Corporate Travel market starting in 2025.
              </p>
              <p className="text-xl text-gray-300">
                Leveraging major payment schemes and integrating services like central payment accounts, virtual credit cards, and self-service portals, Aero Plus will deliver a superior digital experience for corporate clients across the Asia Pacific region and beyond.
              </p>
            </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
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