import React from 'react';
import { Globe } from 'lucide-react';
import type { Location } from '../../types/locations';
import LocationCard from './LocationCard';

interface LocationGroupProps {
  location: Location;
}

export default function LocationGroup({ location }: LocationGroupProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 flex items-center">
        <Globe className="h-6 w-6 mr-3 text-airbus-gold" />
        {location.country}
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {location.offices.map((office, index) => (
          <LocationCard key={index} office={office} />
        ))}
      </div>
    </div>
  );
}