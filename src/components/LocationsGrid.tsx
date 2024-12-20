import React from 'react';
import LocationGroup from './locations/LocationGroup';
import { locations } from '../data/locations';

export default function LocationsGrid() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {locations.map((location, index) => (
        <LocationGroup key={index} location={location} />
      ))}
    </div>
  );
}