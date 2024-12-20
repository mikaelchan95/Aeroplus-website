import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Tag, ChevronRight, Newspaper } from 'lucide-react';
import { articles } from '../data/news';

export default function News() {
  return (
    <section id="news" className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
            <Newspaper className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Latest Updates</span>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">
              AERO+ News
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Stay informed about our latest developments, partnerships, and industry insights
            </p>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Link
            to={`/news/${articles[0].id}`}
            className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-500 block"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-navy-900">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-navy-900/5 text-navy-900">
                    {articles[0].category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-airbus-gold transition-colors">
                  {articles[0].title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {articles[0].excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-3">
                    <img
                      src={articles[0].author.image}
                      alt={articles[0].author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-white">{articles[0].author.name}</div>
                      <div className="text-sm text-gray-400">{articles[0].author.role}</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.slice(1).map((article, index) => (
            <Link
              to={`/news/${article.id}`}
              key={index} 
              className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-500 block"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-airbus-gold/20 text-airbus-gold">
                    <span className="text-white font-medium">{article.category}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 mb-4">
                  {article.author && (
                    <div className="flex items-center">
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm text-gray-400">{article.author.name}</span>
                    </div>
                  )}
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-airbus-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-airbus-gold/0 via-airbus-gold to-airbus-gold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/news"
            className="inline-flex items-center px-8 py-4 bg-airbus-gold text-navy-900 hover:bg-airbus-gold/90 transition-colors group"
          >
            View All News
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        {/* Newsletter Subscription */}
        <div className="mt-20 bg-navy-900/50 border border-white/10 p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff12_1px,_transparent_1px)] [background-size:24px_24px] opacity-10" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 bg-navy-900/50 p-8 rounded-lg border border-white/10">
            <div className="lg:max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with AERO+ News
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest updates on aviation industry trends, company news, and exclusive insights.
              </p>
            </div>
            
            <div className="w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-airbus-gold transition-colors"
                />
                <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center justify-center group transition-all">
                  Subscribe
                  <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}