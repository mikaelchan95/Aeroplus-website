import React from 'react';
import { CreditCard, Shield, LineChart, Plane, ArrowRight, CheckCircle, Building2, Globe } from 'lucide-react';

const benefits = [
  {
    icon: CreditCard,
    title: 'Centralized Payment Control',
    description: 'Single corporate account for all hotel payments, eliminating individual expenses and corporate credit cards.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced fraud protection and secure payment processing with real-time monitoring.'
  },
  {
    icon: LineChart,
    title: 'Automated Reconciliation',
    description: 'Streamlined expense management with automated matching and reporting capabilities.'
  },
  {
    icon: Building2,
    title: 'Global Acceptance',
    description: 'Seamless payments at hotels worldwide through major card scheme partnerships.'
  }
];

const features = [
  {
    title: 'Direct Settlement',
    description: 'Immediate payment processing with hotels, reducing administrative overhead.',
    items: [
      'Real-time transaction processing',
      'Automated payment confirmation',
      'Simplified billing workflow'
    ]
  },
  {
    title: 'Expense Management',
    description: 'Comprehensive tools for tracking and managing travel expenses.',
    items: [
      'Detailed spending analytics',
      'Custom reporting tools',
      'Budget tracking features'
    ]
  },
  {
    title: 'Integration Capabilities',
    description: 'Seamless connection with existing travel and expense systems.',
    items: [
      'API-first architecture',
      'Multiple integration options',
      'Custom workflow support'
    ]
  }
];

export default function TravelPayment() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
              <Plane className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Travel Innovation</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionizing<br />
              Corporate Travel<br />
              <span className="text-airbus-gold">Payment Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your corporate travel payments with our centralized system, 
              delivering complete control, visibility, and automated reconciliation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center group">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 flex items-center group hover:bg-white/10">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Streamlined Payment Processing
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our innovative payment solution eliminates the complexity of traditional 
                corporate travel expenses, providing a seamless experience for both 
                travelers and finance teams.
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
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                alt="Travel Payment Innovation"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-airbus-gold/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-navy-900/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage corporate travel payments efficiently
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

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Travel Payments?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies already benefiting from our innovative payment solutions.
          </p>
          <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center mx-auto group">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}