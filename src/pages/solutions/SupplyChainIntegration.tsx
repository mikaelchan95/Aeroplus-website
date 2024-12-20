import React from 'react';
import { Building2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Features from '../../components/solutions/supply-chain/Features';
import Benefits from '../../components/solutions/supply-chain/Benefits';
import { features, benefits, integrationPartners } from '../../data/supplyChainSolutions';

export default function SupplyChainIntegration() {
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
              <Building2 className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Supply Chain</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Integrated<br />
              Supply Chain<br />
              <span className="text-airbus-gold">Payment Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline your supply chain operations with our comprehensive payment and data 
              integration solutions, optimizing capital management and operational efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                emailSubject="Supply Chain Solutions Demo Request"
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Benefits benefits={benefits} />
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

          <Features features={features} />
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Integration Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with our extensive network of global partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationPartners.map((partner, index) => (
              <div key={index} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                  <partner.icon className="h-6 w-6 text-airbus-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {partner.title}
                </h3>
                <p className="text-gray-300">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your supply chain operations with our integrated payment solutions.
          </p>
          <Button
            variant="primary"
            emailSubject="Supply Chain Solutions Inquiry"
            className="mx-auto"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}