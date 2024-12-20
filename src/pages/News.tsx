import React from 'react';
import { Newspaper } from 'lucide-react';
import { articles } from '../data/news';
import FeaturedArticle from '../components/news/FeaturedArticle';
import ArticleCard from '../components/news/ArticleCard';

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full">
                <Newspaper className="h-5 w-5 text-airbus-gold" />
                <span className="text-airbus-gold font-medium">Latest Updates</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                News &<br />
                <span className="text-airbus-gold">Announcements</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Stay informed about our latest developments, industry insights, and company milestones 
                shaping the future of aviation and payment solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white/20 to-white/50"></div>
          <span className="text-sm mt-4">Scroll to explore</span>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedArticle article={articles[0]} />
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}