import React from 'react';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80',
    tag: 'Innovation',
    title: 'The Future of Aviation Technology',
    description: 'Exploring next-generation technologies in aerospace and how they are reshaping the industry.',
    readTime: '3 min read',
    date: '15 October 2024',
    author: {
      name: 'David Chen',
      role: 'Technology Director'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&q=80',
    tag: 'Sustainability',
    title: 'Leading the Green Aviation Revolution',
    description: 'How Aero Plus is pioneering sustainable practices in aerospace operations.',
    readTime: '5 min read',
    date: '17 October 2024',
    author: {
      name: 'Sarah Wong',
      role: 'Sustainability Lead'
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80',
    tag: 'Technology',
    title: 'Digital Transformation in Aviation',
    description: 'Embracing cutting-edge digital solutions for next-generation maintenance.',
    readTime: '4 min read',
    date: '06 November 2024',
    author: {
      name: 'Michael Zhang',
      role: 'Digital Strategy'
    }
  }
];

export default function Stories() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-airbus-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-airbus-gold font-medium mb-4">Latest Updates</p>
            <h2 className="text-4xl font-bold text-navy-900">
              Stories & Insights
            </h2>
          </div>
          <a href="#all-stories" className="group inline-flex items-center text-navy-900 mt-4 md:mt-0">
            View all stories
            <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article 
              key={index} 
              className="group bg-white hover:bg-gradient-to-b hover:from-white hover:to-airbus-gray/10 transition-all duration-500 relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-navy-900">
                    {story.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{story.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{story.date}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-airbus-gold transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {story.description}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-medium text-navy-900">{story.author.name}</p>
                    <p className="text-sm text-gray-500">{story.author.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-navy-900 transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-navy-900 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-airbus-gold transition-colors duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}