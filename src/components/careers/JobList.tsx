import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Department } from '../../types/careers';

interface JobListProps {
  department: Department;
}

export default function JobList({ department }: JobListProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
        <department.icon className="h-6 w-6 mr-3 text-airbus-gold" />
        {department.name}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {department.positions.map((position, index) => (
          <Link
            key={index}
            to={`/careers/${position.id}`}
            className="group bg-white p-8 shadow-lg hover:shadow-xl transition-all relative"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-navy-900 group-hover:text-airbus-gold transition-colors">
                    {position.title}
                  </h4>
                  <p className="text-gray-600">{position.location}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-navy-900 transition-colors">
                  <ArrowUpRight className="h-4 w-4 text-navy-900 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {position.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-navy-900/5 text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 line-clamp-2">{position.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}