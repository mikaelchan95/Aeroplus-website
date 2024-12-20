import React from 'react';
import { ArrowRight, Building2, ChevronRight, LineChart, Link2, Workflow, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: Link2,
    title: 'Seamless Integration',
    description: 'End-to-end payment and data integration across the entire supply chain ecosystem.'
  },
  {
    icon: LineChart,
    title: 'Capital Optimization',
    description: 'Improved cash flow management and working capital efficiency through integrated solutions.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automated payment orchestration and reconciliation reducing manual intervention.'
  },
  {
    icon: Building2,
    title: 'Supplier Network',
    description: 'Access to an extensive network of verified suppliers and service providers.'
  }
];

const features = [
  {
    title: 'Payment Orchestration',
    description: 'Streamlined payment flows across multiple providers and channels',
    items: [
      'Multi-provider integration',
      'Automated routing',
      'Real-time settlement'
    ]
  },
  {
    title: 'Data Integration',
    description: 'Comprehensive data synchronization and analytics capabilities',
    items: [
      'API-first architecture',
      'Real-time reporting',
      'Advanced analytics'
    ]
  },
  {
    title: 'Capital Management',
    description: 'Optimized working capital and cash flow solutions',
    items: [
      'Supply chain financing',
      'Dynamic discounting',
      'Early payment programs'
    ]
  }
];

const stats = [
  { value: '45%', label: 'Cost Reduction', description: 'in payment processing' },
  { value: '60%', label: 'Faster Settlement', description: 'through automation' },
  { value: '99.9%', label: 'System Uptime', description: 'guaranteed' },
  { value: '24/7', label: 'Support', description: 'global coverage' }
];

export default function SupplyChainIntegration() {
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
              <Building2 className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Supply Chain</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Integrated<br />
              Supply Chain<br />
              <span className="text-airbus-gold">Payment Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline your supply chain operations with our comprehensive payment and data integration solutions,
              optimizing capital management and operational efficiency.
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

      {/* Stats Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-navy-900/5 group hover:bg-navy-900 transition-all duration-500">
                <div className="text-3xl font-bold text-navy-900 group-hover:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 group-hover:text-white/90 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-white/70">
                  {stat.description}
                </div>
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
              Transform your supply chain operations with our integrated solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for supply chain payment management
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
                      <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mr-3" />
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
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies already benefiting from our integrated payment solutions.
          </p>
          <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center mx-auto group">
            Get Started Today
            <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}