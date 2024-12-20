import React from 'react';
import { ArrowRight, ChevronRight, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full">
              <Globe className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Global Aviation Leader</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transforming<br />
              <span className="text-airbus-gold">Aviation</span> &<br />
              Payment Solutions
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Pioneering innovative solutions in aviation asset trading, corporate travel payments, and supply chain financing. Building the future of integrated business solutions across Asia Pacific.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.location.href = 'mailto:info@aeroplusgroup.com?subject=Demo Request'}
                className="group bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center justify-center transition-all duration-300"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = '/solutions'}
                className="group border border-white/20 text-white hover:bg-white/10 px-8 py-4 flex items-center justify-center transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white/20 to-white/50"></div>
        <span className="text-sm mt-4">Scroll to explore</span>
      </div>
    </div>
  );
}