import React from 'react';
import { CreditCard } from 'lucide-react';
import Button from '../../components/ui/Button';
import Features from '../../components/solutions/virtual-cards/Features';
import Benefits from '../../components/solutions/virtual-cards/Benefits';
import UseCases from '../../components/solutions/virtual-cards/UseCases';
import { features, benefits, useCases } from '../../data/virtualCardSolutions';

export default function VirtualCardSolutions() {
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
              <Button
                variant="primary"
                emailSubject="Virtual Card Solutions Demo Request"
              >
                Get Started
              </Button>
              <Button variant="secondary">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Benefits benefits={benefits} />
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

          <Features features={features} />
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

          <UseCases useCases={useCases} />
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
          <Button
            variant="primary"
            emailSubject="Virtual Card Solutions Inquiry"
            className="mx-auto"
          >
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}