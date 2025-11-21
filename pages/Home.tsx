import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeatureShowcase from '@/components/FeatureShowcase';
import StatsSection from '@/components/StatsSection';
import VideoGrid from '@/components/VideoGrid';
import GlobeSection from '@/components/GlobeSection';

const Home: React.FC = () => {
    useEffect(() => {
        // Smooth scroll behavior override
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <>
            <Hero />
            <FeatureShowcase />
            <StatsSection />
            <VideoGrid />
            <GlobeSection />
        </>
    );
};

export default Home;
