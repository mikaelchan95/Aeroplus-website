import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, Building2, Globe } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const subjects = [
    'General Inquiry',
    'Business Partnership',
    'Product Demo',
    'Technical Support',
    'Career Opportunities'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@aeroplus.com',
      link: 'mailto:info@aeroplus.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+852 2388 8234',
      link: 'tel:+85223888234'
    },
    {
      icon: MapPin,
      label: 'Global Headquarters',
      value: 'Central, Hong Kong',
      subvalue: 'One International Finance Centre'
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-airbus-gold/10 px-4 py-2 rounded-full mb-6">
                <Mail className="h-5 w-5 text-airbus-gold" />
                <span className="text-airbus-gold font-medium">Get in Touch</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Transform Your Business Together
              </h2>
              <p className="text-lg text-gray-300">
                Ready to revolutionize your corporate travel and payment operations? Our team is here to help you discover the perfect solution for your business needs.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-lg font-medium text-white hover:text-airbus-gold transition-colors"
                        >
                          <span>{item.value}</span>
                        </a>
                      ) : (
                        <div>
                          <p className="text-lg font-medium text-white">{item.value}</p>
                          {item.subvalue && (
                            <p className="text-sm text-gray-400">{item.subvalue}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM HKT</p>
                <p>Saturday: 9:00 AM - 1:00 PM HKT</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 p-8 relative">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                <p className="text-gray-300">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-airbus-gold focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-airbus-gold text-navy-900 py-4 px-8 flex items-center justify-center group hover:bg-airbus-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'idle' && (
                    <span className="flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                  {formStatus === 'submitting' && (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 animate-pulse mr-2" />
                      Sending...
                    </span>
                  )}
                  {formStatus === 'success' && (
                    <span className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message Sent
                    </span>
                  )}
                </button>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  * Required fields
                </p>
              </form>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-airbus-gold/5 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-white/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}