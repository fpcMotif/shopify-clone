import type React from "react";
import { useEffect } from "react";
import FeatureShowcase from "@/components/feature-showcase";
import GlobeSection from "@/components/globe-section";
import Hero from "@/components/hero";
import StatsSection from "@/components/stats-section";
import VideoGrid from "@/components/video-grid";

const Home: React.FC = () => {
	useEffect(() => {
		// Smooth scroll behavior override
		document.documentElement.style.scrollBehavior = "smooth";
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
