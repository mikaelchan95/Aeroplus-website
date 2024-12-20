import React from 'react';
import { Building2, Globe, Shield, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const features = [
  {
    title: 'Cross-Border Transactions',
    description: 'First integrated aviation asset exchange center in China',
    items: [
      'Seamless domestic and international trading',
      'Regulatory compliance',
      'Market access optimization'
    ]
  },
  {
    title: 'Trading Advisory',
    description: 'Professional consulting for aircraft buyers and sellers',
    items: [
      'Bidding strategies',
      'Market insights',
      'Transaction execution'
    ]
  },
  {
    title: 'Valuation & Support',
    description: 'Independent third-party services',
    items: [
      'Asset valuation',
      'Technical evaluations',
      'Maintenance oversight'
    ]
  }
];

const benefits = [
  {
    icon: Building2,
    title: 'Asset Exchange Platform',
    description: 'First integrated aviation asset trading center in China.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Extensive connections with airlines, lessors, and investors.'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Full adherence to regional and international standards.'
  }
];

export default function AviationAssetTrading() {
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
              <Building2 className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Aviation Asset Trading</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Leading Aviation<br />
              Asset Trading &<br />
              <span className="text-airbus-gold">Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive aviation asset trading and management services, from valuation to remarketing.
            </p>

            <Button
              variant="primary"
              emailSubject="Aviation Asset Trading Demo Request"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions for aviation asset management
            </p>
          </div>

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
                      <CheckCircle className="h-5 w-5 text-airbus-gold mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why choose our aviation asset trading services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 shadow-lg group hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
                  <benefit.icon className="h-6 w-6 text-navy-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our aviation asset trading services.
          </p>
          <Button
            variant="primary"
            emailSubject="Aviation Asset Trading Inquiry"
            className="mx-auto"
          >
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}