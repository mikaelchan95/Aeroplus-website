import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import type { Article } from '../../types/news';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/news/${article.id}`}
      className="group relative bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-navy-900 backdrop-blur-sm">
            {article.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <ArrowUpRight className="h-5 w-5 text-navy-900" />
          </div>
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
              <span className="text-sm text-gray-500">{article.author.name}</span>
            </div>
          )}
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-airbus-gold transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-airbus-gold/0 via-airbus-gold to-airbus-gold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </Link>
  );
}