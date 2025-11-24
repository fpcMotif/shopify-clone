import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

const TABS = [
	{ id: 0, title: "Sell online and in person" },
	{ id: 1, title: "Sell locally and globally" },
	{ id: 2, title: "Sell direct and wholesale" },
	{ id: 3, title: "Sell on desktop and mobile" },
];

const IMAGES = [
	"https://cdn.shopify.com/b/shopify-brochure2-assets/c65bc0c2daf1df2c109d1f9c14444a57.webp?originalWidth=1045&originalHeight=800&width=800",
	"https://cdn.shopify.com/b/shopify-brochure2-assets/e919a4c2c7484b87699b2e6f5d020690.webp?originalWidth=454&originalHeight=800&width=400",
	"https://cdn.shopify.com/b/shopify-brochure2-assets/365260f1127ed2d9c4d6185512d63983.webp?originalWidth=1032&originalHeight=800&width=800",
	"https://cdn.shopify.com/b/shopify-brochure2-assets/afdceeca27acf0af45372d782b36a153.webp?originalWidth=1032&originalHeight=800&width=800",
];

const ANIMATION_DURATION = 0.5;
const ANIMATION_X_OFFSET = 50;

const FeatureShowcase: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className="py-24 bg-shopify-dark text-white overflow-hidden">
			<div className="max-w-(--width-container) mx-auto px-6 lg:px-12">
				<div className="mb-16 max-w-3xl">
					<h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
						The one commerce platform behind it all
					</h2>

					<div className="flex flex-wrap gap-x-8 gap-y-4 text-2xl md:text-3xl font-medium text-gray-500">
						{TABS.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`transition-colors duration-300 text-left hover:text-white ${
									activeTab === tab.id ? "text-shopify-green" : ""
									}`}
							>
								{tab.title}
							</button>
						))}
					</div>
				</div>

				<div className="relative w-full h-feature-mobile md:h-feature-desktop">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, x: ANIMATION_X_OFFSET }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: ANIMATION_DURATION }}
						className="flex gap-4 overflow-x-auto pb-4 h-full no-scrollbar"
					>
						{/* Mocking the specific content for each tab - reusing images for simplicity in clone */}
						<div className="min-w-[80%] md:min-w-[60%] lg:min-w-[45%] h-full rounded-2xl overflow-hidden relative group">
							<img
								src={IMAGES[activeTab]}
								alt="Feature"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent">
								<p className="text-white font-bold">Example Store</p>
							</div>
						</div>
						<div className="min-w-[40%] md:min-w-[30%] lg:min-w-[25%] h-full rounded-2xl overflow-hidden relative bg-surface flex items-center justify-center">
							<img
								src={IMAGES[(activeTab + 1) % IMAGES.length]}
								alt="Secondary"
								className="w-full h-full object-cover opacity-secondary-image"
							/>
						</div>
						<div className="min-w-[40%] md:min-w-[30%] lg:min-w-[35%] h-full rounded-2xl overflow-hidden relative bg-surface flex items-center justify-center">
							<img
								src={IMAGES[(activeTab + 2) % IMAGES.length]}
								alt="Tertiary"
								className="w-full h-full object-cover opacity-secondary-image"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FeatureShowcase;
