import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../../data/team';
import type { TeamMember } from '../../types/team';

export default function LeadershipProfile() {
  const { id } = useParams();
  
  // Find the team member based on the URL path
  const member = teamMembers.find(m => m.path === `/leadership/${id}`);
  
  if (!member) {
    return <Navigate to="/leadership" replace />;
  }

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link 
          to="/leadership" 
          className="inline-flex items-center text-navy-900 hover:text-airbus-gold mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Leadership
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Image Column */}
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <div className="mt-6 flex space-x-4">
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-navy-900/5 hover:bg-navy-900 hover:text-white rounded-full transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-3 bg-navy-900/5 hover:bg-navy-900 hover:text-white rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-navy-900 mb-2">{member.name}</h1>
              <p className="text-xl text-airbus-gold">{member.role}</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {member.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-navy-900/5 text-navy-900 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {member.achievements && (
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Achievements</h2>
                <ul className="space-y-4">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}