import React from 'react';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CalvinLim() {
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
                src="https://i.imgur.com/CSn0XDP.jpeg"
                alt="Calvin Lim"
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
              <h1 className="text-4xl font-bold text-navy-900 mb-2">Calvin Lim</h1>
              <p className="text-xl text-airbus-gold">Managing Director</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                Calvin Lim is an accomplished investor and executive leader with a diverse portfolio 
                spanning aviation, renewable energy, information technology, and payments. He brings 
                a strategic, growth-oriented mindset to each venture he oversees, leveraging extensive 
                market insight and operational expertise.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Known for fostering sustainable growth, Calvin's leadership style emphasizes innovation, 
                strategic partnerships, and long-term value creation for stakeholders.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Investment Strategy
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Business Development
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Strategic Partnerships
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Innovation Management
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Sustainable Growth
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Achievements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Led strategic growth initiatives across multiple sectors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Developed innovative payment solutions for the aviation industry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Established key partnerships in renewable energy sector</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}