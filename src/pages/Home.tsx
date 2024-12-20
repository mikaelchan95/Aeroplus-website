import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import News from '../components/News';
import ContactSection from '../components/Contact';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Hero />
      <Services />
      <News />
      <ContactSection />
    </div>
  );
}