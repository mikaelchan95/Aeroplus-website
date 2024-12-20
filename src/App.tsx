import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Leadership from './pages/Leadership';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Investors from './pages/Investors';
import ArticlePage from './pages/news/ArticlePage';
import News from './pages/News';

// Solution Pages
import AviationAssetTrading from './pages/solutions/AviationAssetTrading';
import TravelPayment from './pages/solutions/TravelPayment';
import VirtualCardSolutions from './pages/solutions/VirtualCardSolutions';
import SupplyChainIntegration from './pages/solutions/SupplyChainIntegration';

// Leadership Pages
import LeadershipProfile from './pages/leadership/LeadershipProfile';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="solutions/aviation-asset-trading" element={<AviationAssetTrading />} />
          <Route path="solutions/travel-payment" element={<TravelPayment />} />
          <Route path="solutions/virtual-cards" element={<VirtualCardSolutions />} />
          <Route path="solutions/supply-chain" element={<SupplyChainIntegration />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="leadership/:id" element={<LeadershipProfile />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="news/:id" element={<ArticlePage />} />
          <Route path="/investors" element={<Investors />} />
        </Route>
      </Routes>
    </Router>
  );
}