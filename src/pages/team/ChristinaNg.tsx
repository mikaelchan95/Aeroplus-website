import React from 'react';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChristinaNg() {
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
                src="https://i.imgur.com/eq118p8.jpeg"
                alt="Christina Ng"
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
              <h1 className="text-4xl font-bold text-navy-900 mb-2">Christina Ng</h1>
              <p className="text-xl text-airbus-gold">Chairman</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                Christina Ng is a distinguished pioneer in aviation finance, recognized for her strategic 
                foresight and international business acumen. She has founded and led prominent ventures 
                such as Friedmann Pacific Asset Management and China Aircraft Leasing Group Holding Limited.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With a track record of innovation—from developing Aircraft Recycling International to 
                driving growth in global aviation finance—Christina excels at orchestrating cross-border 
                transactions, establishing robust industry platforms, and cultivating strategic 
                partnerships in the global aviation sector.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Aviation Finance
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Strategic Leadership
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Global Business Development
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Cross-border Transactions
                </span>
                <span className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full">
                  Industry Innovation
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Achievements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Founded Friedmann Pacific Asset Management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Established China Aircraft Leasing Group Holding Limited</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">Developed Aircraft Recycling International</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}