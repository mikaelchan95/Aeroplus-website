import React from 'react';
import { CreditCard, Shield, Wallet, Globe, ArrowRight, CheckCircle, Smartphone, Lock } from 'lucide-react';

const benefits = [
  {
    icon: Wallet,
    title: 'Flexible Payment Options',
    description: 'Support for both single-use and recurring virtual cards with customizable spending limits.'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced fraud prevention with unique card numbers and real-time transaction monitoring.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description: 'Seamless mobile wallet access for convenient payments on the go.'
  },
  {
    icon: Lock,
    title: 'Controlled Spending',
    description: 'Set precise spending limits, merchant categories, and validity periods.'
  }
];

const features = [
  {
    title: 'Mobile Wallet Access',
    description: 'Instant virtual card deployment to mobile wallets for immediate use.',
    items: [
      'Apple Pay & Google Pay integration',
      'Real-time card provisioning',
      'Secure biometric authentication'
    ]
  },
  {
    title: 'Spend Management',
    description: 'Comprehensive controls and visibility over corporate spending.',
    items: [
      'Custom spending limits',
      'Merchant category restrictions',
      'Real-time transaction alerts'
    ]
  },
  {
    title: 'Global Acceptance',
    description: 'Worldwide acceptance through major payment networks.',
    items: [
      'International payment support',
      'Multi-currency capabilities',
      'Local payment processing'
    ]
  }
];

const useCases = [
  {
    title: 'Travel & Entertainment',
    description: 'Streamline corporate travel expenses with dedicated virtual cards for each trip.',
    benefits: ['Simplified reconciliation', 'Enhanced security', 'Automated expense reporting']
  },
  {
    title: 'Procurement',
    description: 'Generate unique virtual cards for vendor payments and procurement processes.',
    benefits: ['Vendor-specific cards', 'Automated payments', 'Detailed transaction data']
  },
  {
    title: 'Subscription Management',
    description: 'Manage recurring payments and subscriptions with dedicated virtual cards.',
    benefits: ['Subscription tracking', 'Automated renewals', 'Spend optimization']
  }
];

export default function VirtualCardSolutions() {
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
              <CreditCard className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Virtual Cards</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Next-Generation<br />
              Virtual Card<br />
              <span className="text-airbus-gold">Payment Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empower your business with secure, flexible virtual card solutions that 
              streamline payments and enhance control over corporate spending.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 flex items-center group hover:bg-white/10">
                Watch Demo
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage virtual cards efficiently
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

      {/* Use Cases */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how virtual cards can transform your business operations
            </p>
          </div>

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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your corporate payments with our innovative virtual card solutions.
          </p>
          <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 flex items-center mx-auto group">
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}