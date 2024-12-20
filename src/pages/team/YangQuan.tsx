import React from 'react';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function YangQuan() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-navy-900 hover:text-airbus-gold mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Team
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Image Column */}
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src="https://i.imgur.com/GR5C9nx.jpeg"
                alt="Yang Quan"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <div className="mt-6 flex space-x-4">
                <button className="p-3 bg-navy-900/5 hover:bg-navy-900 hover:text-white rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-3 bg-navy-900/5 hover:bg-navy-900 hover:text-white rounded-full transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-navy-900 mb-2">Yang Quan</h1>
              <p className="text-xl text-airbus-gold">Chief Technology Officer</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                Yang Quan is a seasoned technology executive with deep expertise in travel and payment 
                technology. He excels in transforming complex ideas into scalable, tailored solutions 
                that meet evolving market demands.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With a proven track record of guiding high-performing engineering teams, Yang focuses 
                on innovation, product reliability, and delivering customer-centric platforms that 
                enhance the travel and payments experience.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Payment Technology
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  System Architecture
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Product Development
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Engineering Leadership
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Technology Innovation
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Achievements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Led development of next-generation payment platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Implemented scalable technology infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Pioneered innovative travel technology solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}