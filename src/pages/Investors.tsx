import React from 'react';
import { ArrowUpRight, ChevronRight, TrendingUp, Shield, Globe, Users, LineChart, Briefcase } from 'lucide-react';

const marketStats = [
  { label: 'Market Size by 2028', value: '$1.91T', growth: '+10.6% CAGR' },
  { label: 'APAC Growth Rate', value: '15.3%', growth: 'Year over Year' },
  { label: 'Current Partnerships', value: '500+', growth: 'Global Companies' },
  { label: 'Transaction Volume', value: '$50B+', growth: 'Annually' }
];

const investmentHighlights = [
  {
    icon: Globe,
    title: 'Market Leadership',
    description: 'Dominant position in APAC B2B payments with established presence since 1989'
  },
  {
    icon: TrendingUp,
    title: 'Strong Growth',
    description: 'Consistent revenue growth with expanding market share in key regions'
  },
  {
    icon: Shield,
    title: 'Robust Technology',
    description: 'Proprietary payment platform with advanced security and scalability'
  },
  {
    icon: Users,
    title: 'Strategic Partnerships',
    description: 'Deep relationships with major financial institutions and aviation companies'
  }
];

const financialMetrics = [
  { metric: 'Revenue Growth', value: '32%', period: 'YoY' },
  { metric: 'Gross Margin', value: '68%', period: 'FY2023' },
  { metric: 'Client Retention', value: '95%', period: 'Last 3 Years' },
  { metric: 'Market Share', value: '45%', period: 'APAC Region' }
];

export default function Investors() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Invest in the Future of <br />
              <span className="text-airbus-gold">B2B Payments</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join us in transforming the aviation industry's payment infrastructure across Asia Pacific.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center group">
                Investor Presentation
                <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 flex items-center group hover:bg-white/10">
                Financial Reports
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-navy-900/5 group hover:bg-navy-900 transition-all duration-500">
                <div className="text-3xl font-bold text-navy-900 group-hover:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-white/80 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-airbus-gold">
                  {stat.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-airbus-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Investment Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Key factors driving our growth and market leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <div key={index} className="group bg-white p-8 hover:bg-gradient-to-br hover:from-white hover:to-airbus-gray/20 transition-all duration-500">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-navy-900/5 flex items-center justify-center group-hover:bg-navy-900 transition-colors">
                    <highlight.icon className="h-8 w-8 text-navy-900 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Financial Performance
            </h2>
            <p className="text-lg text-gray-300">
              Track record of strong growth and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {financialMetrics.map((item, index) => (
              <div key={index} className="text-center p-8 border border-white/10 group hover:border-airbus-gold transition-all">
                <div className="text-3xl font-bold text-airbus-gold mb-2">
                  {item.value}
                </div>
                <div className="text-lg mb-2">{item.metric}</div>
                <div className="text-sm text-gray-400">{item.period}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900 px-8 py-4 flex items-center mx-auto group">
              Download Investor Kit
              <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* IR Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Investor Relations Contact
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated investor relations team is here to assist you with any inquiries.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">Sarah Chen</div>
                    <div className="text-gray-600">Head of Investor Relations</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy-900/5 flex items-center justify-center mr-4">
                    <LineChart className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">ir@aeroplus.com</div>
                    <div className="text-gray-600">+65 6789 0123</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy-900/5 p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Stay Updated
              </h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-airbus-gold focus:border-transparent"
                />
                <button className="w-full bg-navy-900 text-white py-3 hover:bg-navy-800 transition-colors flex items-center justify-center group">
                  Subscribe to IR Updates
                  <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}