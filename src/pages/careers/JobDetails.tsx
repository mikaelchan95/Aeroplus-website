import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departments } from '../../data/careers';
import { ArrowLeft, Building2, Clock, MapPin, Tag } from 'lucide-react';
import ApplicationForm from '../../components/careers/ApplicationForm';
import Button from '../../components/ui/Button';

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  const position = departments.flatMap(d => d.positions).find(p => p.id === id);
  
  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">Position Not Found</h1>
          <Link 
            to="/careers"
            className="text-airbus-gold hover:text-airbus-gold/80 transition-colors"
          >
            Return to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/careers" 
          className="inline-flex items-center text-navy-900 hover:text-airbus-gold mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Careers
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-navy-900 mb-4">{position.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                <span>{position.type}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{position.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Full-time</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">{position.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {position.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {position.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-airbus-gold rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {position.tags.map((tag, index) => (
              <div key={index} className="flex items-center px-3 py-1 bg-navy-900/5 text-navy-900 text-sm">
                <Tag className="h-4 w-4 mr-2" />
                {tag}
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button
              variant="primary"
              onClick={() => setShowApplicationForm(true)}
              className="w-full justify-center"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      
      {showApplicationForm && position && (
        <ApplicationForm
          position={position}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
}