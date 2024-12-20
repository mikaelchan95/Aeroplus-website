import React from 'react';
import { Plane, CheckCircle, Building2, Globe, Shield } from 'lucide-react';
import Button from '../../components/ui/Button';

const features = [
  {
    title: 'Centralized Hotel Payments',
    description: 'Direct hotel reservations and payments through a central account.',
    items: [
      'Eliminate individual expenses',
      'Automated reconciliation',
      'Complete spending control',
      'Post-paid experience'
    ]
  },
  {
    title: 'Virtual Card Integration',
    description: 'Seamless virtual card acceptance for overseas transactions.',
    items: [
      'Global card scheme support',
      'Cross-border payments',
      'Real-time processing',
      'Enhanced security'
    ]
  },
  {
    title: 'Corporate Travel Management',
    description: 'Comprehensive travel expense management solution.',
    items: [
      'Booking integration',
      'Policy compliance',
      'Expense tracking',
      'Reporting tools'
    ]
  }
];

const benefits = [
  {
    icon: Building2,
    title: 'Streamlined Operations',
    description: 'Centralized payment system eliminating the need for individual corporate credit cards.'
  },
  {
    icon: Globe,
    title: 'Global Acceptance',
    description: 'Seamless payments at hotels worldwide through major card scheme partnerships.'
  },
  {
    icon: Shield,
    title: 'Enhanced Control',
    description: 'Complete visibility and control over corporate travel spending.'
  }
];

export default function TravelPayment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
              <Plane className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Travel Payment Solutions</span>
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
              <Button
                variant="primary"
                emailSubject="Travel Payment Solutions Demo Request"
              >
                Schedule Demo
              </Button>
              <Button variant="secondary">
                Learn More
              </Button>
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
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
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
            Launch in 2025: Experience our comprehensive suite of credit-based corporate payment services.
          </p>
          <Button
            variant="primary"
            emailSubject="Travel Payment Solutions Inquiry"
            className="mx-auto"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}