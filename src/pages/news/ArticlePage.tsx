import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { articles } from '../../data/news';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">Article Not Found</h1>
          <Link 
            to="/"
            className="text-airbus-gold hover:text-airbus-gold/80 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-navy-900 hover:text-airbus-gold mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to News
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-900/5 text-navy-900">
              <Tag className="h-4 w-4 mr-2" />
              {article.category}
            </span>
            <span className="inline-flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-navy-900 mb-6">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center">
            {article.author.image && (
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
            )}
            <div>
              <div className="font-medium text-navy-900">{article.author.name}</div>
              <div className="text-sm text-gray-500">{article.author.role}</div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose max-w-none">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}