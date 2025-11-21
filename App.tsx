import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureShowcase from './components/FeatureShowcase';
import StatsSection from './components/StatsSection';
import VideoGrid from './components/VideoGrid';
import GlobeSection from './components/GlobeSection';
import Footer from './components/Footer';
import { Globe } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior override
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-shopify-dark selection:bg-shopify-green selection:text-black">
      <Header />
      <main>
        <Hero />
        <FeatureShowcase />
        <StatsSection />
        <VideoGrid />
        <GlobeSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;