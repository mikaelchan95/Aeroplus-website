import React from 'react';
import { Link } from 'react-router-dom';
import { Users2 } from 'lucide-react';
import TeamMemberCard from './team/TeamMemberCard';
import { teamMembers } from '../data/team';
import { TeamHighlights } from './team/TeamHighlights';

export default function Team() {
  return (
    <section id="team" className="py-32 bg-gradient-to-b from-white to-airbus-gray/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00205B_1px,transparent_1px)] opacity-[0.03] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
            <Users2 className="h-5 w-5 text-airbus-gold" />
            <span className="text-airbus-gold font-medium">Our Leadership</span>
          </div>
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            Meet the Team Behind Our Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals leading our mission to transform the future of aviation and B2B payments.
          </p>
        </div>

        {/* Highlights */}
        <TeamHighlights />

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Join our team of innovators shaping the future of aviation finance
          </p>
          <Link 
            to="/careers"
            className="inline-flex items-center px-8 py-4 bg-navy-900 text-white hover:bg-navy-800 transition-colors"
          >
            View Career Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}