import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';
import { footerSections } from '../utils/navigation';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@aeroplusgroup.com',
    link: 'mailto:info@aeroplusgroup.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(852) 3619-4080',
    link: 'tel:+85236194080'
  },
  {
    icon: MapPin,
    label: 'Global Headquarters',
    value: 'Hong Kong',
    subvalue: '23/F, Billion Plaza Two, 10 Cheung Yue Street, Cheung Sha Wan, Kowloon'
  }
];

const locations = [
  { city: 'Hong Kong', address: 'Central Business District' },
  { city: 'Singapore', address: 'Gemini@Sims' },
  { city: 'Shanghai', address: 'Changning District' }
];

export default function Footer() {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff12_1px,_transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 py-20 border-b border-white/10">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <h3 
                onClick={() => navigate('/')} 
                className="text-2xl font-bold cursor-pointer hover:text-airbus-gold transition-colors"
              >
                Aero Plus
              </h3>
              <p className="text-white/60">Transforming Corporate Travel & Payments</p>
            </div>
            
            <p className="text-lg text-white/80 max-w-md">
              Pioneering innovative payment solutions for corporate travel and supply chain management across Asia Pacific since 1989.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <item.icon className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-lg font-medium text-white hover:text-airbus-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div>
                          <p className="text-lg font-medium text-white">{item.value}</p>
                          {item.subvalue && (
                            <p className="text-sm text-white/60">{item.subvalue}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Locations */}
          <div className="grid sm:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-airbus-gold mt-1" />
                  <div>
                    <h4 className="font-semibold group-hover:text-airbus-gold transition-colors">
                      {location.city}
                    </h4>
                    <p className="text-sm text-white/60">{location.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 border-b border-white/10">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.name}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 1989-{new Date().getFullYear()} Aero Plus Group. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}