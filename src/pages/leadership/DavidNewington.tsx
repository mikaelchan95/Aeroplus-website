import React from 'react';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DavidNewington() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link to="/leadership" className="inline-flex items-center text-navy-900 hover:text-airbus-gold mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Leadership
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Image Column */}
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src="https://i.imgur.com/K9caDyB.jpeg"
                alt="David Newington"
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
              <h1 className="text-4xl font-bold text-navy-900 mb-2">David Newington</h1>
              <p className="text-xl text-airbus-gold">Chief Operating Officer</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                David Newington is a veteran leader in the payments industry with extensive experience 
                in AirPlus International APAC. His expertise spans corporate travel, payment systems, 
                and operational excellence.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With a focus on operational efficiency and customer satisfaction, David has successfully 
                led major initiatives in payment system integration and business process optimization.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Operations Management
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Payment Systems
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Corporate Travel
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Process Optimization
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Achievements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Led AirPlus International's APAC expansion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Established AirPlus Australia operations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Developed innovative payment solutions for corporate travel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}