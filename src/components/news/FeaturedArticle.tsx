import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowUpRight } from 'lucide-react';
import type { Article } from '../../types/news';

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <Link
      to={`/news/${article.id}`}
      className="group relative block overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-navy-900">
              Featured
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <Tag className="h-4 w-4 mr-2" />
              <span>{article.category}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-navy-900 group-hover:text-airbus-gold transition-colors">
            {article.title}
          </h2>

          <p className="text-gray-600 text-lg">
            {article.excerpt}
          </p>

          {article.author && (
            <div className="flex items-center space-x-3">
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-navy-900">{article.author.name}</div>
                <div className="text-sm text-gray-500">{article.author.role}</div>
              </div>
            </div>
          )}

          <div className="inline-flex items-center text-navy-900 font-medium group-hover:text-airbus-gold transition-colors">
            Read Full Article
            <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}