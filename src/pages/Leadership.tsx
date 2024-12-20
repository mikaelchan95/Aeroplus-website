import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowUpRight, Users2 } from 'lucide-react';

const team = [
  {
    name: 'Christina Ng',
    role: 'Chairman',
    description: 'A distinguished pioneer in aviation finance, recognized for her strategic foresight and international business acumen.',
    image: 'https://i.imgur.com/eq118p8.jpeg',
    expertise: ['Aviation Finance', 'Strategic Leadership', 'Global Business Development'],
    path: '/leadership/christina-ng'
  },
  {
    name: 'Calvin Lim',
    role: 'Managing Director',
    description: 'An accomplished investor and executive leader with a diverse portfolio spanning aviation, renewable energy, and technology.',
    image: 'https://i.imgur.com/CSn0XDP.jpeg',
    expertise: ['Investment Strategy', 'Innovation', 'Strategic Partnerships'],
    path: '/leadership/calvin-lim'
  },
  {
    name: 'Yang Quan',
    role: 'Chief Technology Officer',
    description: 'A seasoned technology executive with deep expertise in travel and payment technology.',
    image: 'https://i.imgur.com/I9sg5H1.png',
    expertise: ['Technology Innovation', 'Product Development', 'Engineering Leadership'],
    path: '/leadership/yang-quan'
  },
  {
    name: 'David Newington',
    role: 'Chief Operating Officer',
    description: 'A veteran leader in the payments industry with extensive experience in AirPlus International APAC.',
    image: 'https://i.imgur.com/K9caDyB.jpeg',
    expertise: ['Operations Excellence', 'Payment Systems', 'Corporate Travel'],
    path: '/leadership/david-newington'
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
              <Users2 className="h-5 w-5 text-airbus-gold" />
              <span className="text-airbus-gold font-medium">Our Leadership</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Meet the Team<br />
              Behind Our<br />
              <span className="text-airbus-gold">Success</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experienced professionals leading our mission to transform the future of aviation and B2B payments.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Link
                to={member.path}
                key={index} 
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}