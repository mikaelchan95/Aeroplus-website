import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Fleet Expansion Program',
    category: 'Aircraft Sales Management',
    description: 'Comprehensive fleet upgrade initiative implementing next-generation aircraft technology.',
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80'
  },
  {
    title: 'Advanced Safety Integration',
    category: 'Safety Systems',
    description: 'State-of-the-art safety protocols and monitoring systems for enhanced fleet security.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Next-Gen Trading Center',
    category: 'Parts Trading',
    description: 'Advanced digital marketplace for aircraft parts with real-time inventory and authentication.',
    image: 'https://images.unsplash.com/photo-1559083991-9bdef0bb5a39?auto=format&fit=crop&q=80'
  }
];

export default function Projects() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-airbus-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-airbus-gold font-medium mb-4">Our Work</p>
            <h2 className="text-4xl font-bold text-navy-900">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group bg-white hover:bg-gradient-to-b hover:from-white hover:to-airbus-gray/10 transition-all duration-500 relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-navy-900">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-airbus-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                {/* Action Button */}
                <div className="flex justify-end mt-4">
                  <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-navy-900 transition-colors">
                    <ArrowUpRight className="h-5 w-5 text-navy-900 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-airbus-gold transition-colors duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}