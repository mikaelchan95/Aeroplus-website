import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import type { Office } from '../../types/locations';

interface LocationCardProps {
  office: Office;
}

export default function LocationCard({ office }: LocationCardProps) {
  return (
    <div className="group bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00205B_1px,transparent_1px)] opacity-[0.02] [background-size:16px_16px] group-hover:opacity-[0.05] transition-opacity" />
      
      {office.isHeadquarter && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-airbus-gold text-navy-900 text-xs sm:text-sm font-medium rounded-full">
          Headquarters
        </div>
      )}
      
      <div className="space-y-4 sm:space-y-6 relative">
        <h4 className="text-lg sm:text-xl font-bold text-navy-900 group-hover:text-airbus-gold transition-colors line-clamp-2">
          {office.name}
        </h4>
        
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-navy-900/5 flex items-center justify-center rounded-lg group-hover:bg-navy-900 transition-colors flex-shrink-0">
            <MapPin className="h-5 w-5 text-navy-900 group-hover:text-white transition-colors" />
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{office.address}</p>
        </div>
        
        {office.tel && (
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-navy-900/5 flex items-center justify-center rounded-lg group-hover:bg-navy-900 transition-colors flex-shrink-0">
              <Phone className="h-5 w-5 text-navy-900 group-hover:text-white transition-colors" />
            </div>
            <a 
              href={`tel:${office.tel.replace(/[^0-9+]/g, '')}`}
              className="text-sm sm:text-base text-gray-600 hover:text-airbus-gold transition-colors"
            >
              {office.tel}
            </a>
          </div>
        )}
        
        {office.email && (
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-navy-900/5 flex items-center justify-center rounded-lg group-hover:bg-navy-900 transition-colors flex-shrink-0">
              <Mail className="h-5 w-5 text-navy-900 group-hover:text-white transition-colors" />
            </div>
            <a 
              href={`mailto:${office.email}`} 
              className="text-sm sm:text-base text-gray-600 hover:text-airbus-gold transition-colors break-all"
            >
              {office.email}
            </a>
          </div>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-airbus-gold/10 -z-10 transition-all group-hover:bg-airbus-gold/20" />
      <div className="absolute -top-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-navy-900/10 -z-10 transition-all group-hover:bg-navy-900/20" />
    </div>
  );
}