import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import type { TeamMember } from '../../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Link
      to={member.path}
      className="group relative bg-white shadow-lg hover:shadow-xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Social Links - Appear on Hover */}
        <div className="absolute bottom-4 left-4 flex space-x-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="p-2 bg-white/90 hover:bg-white rounded-full text-navy-900 transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/90 hover:bg-white rounded-full text-navy-900 transition-colors">
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-navy-900 group-hover:text-airbus-gold transition-colors">
            {member.name}
          </h3>
          <p className="text-airbus-gold font-medium mt-1">{member.role}</p>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-2">
          {member.description}
        </p>

        {/* Expertise Tags */}
        <div className="space-y-2">
          {member.expertise.map((skill, idx) => (
            <span 
              key={idx}
              className="inline-block mr-2 mb-2 px-3 py-1 text-xs font-medium bg-navy-900/5 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-6 flex justify-end">
          <div className="w-8 h-8 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-navy-900 transition-colors">
            <ArrowUpRight className="h-4 w-4 text-navy-900 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-airbus-gold/10 -z-10 transition-all group-hover:bg-airbus-gold/20" />
      <div className="absolute -top-2 -left-2 w-24 h-24 bg-navy-900/10 -z-10 transition-all group-hover:bg-navy-900/20" />
    </Link>
  );
}