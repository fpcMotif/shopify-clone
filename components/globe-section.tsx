import type React from "react";

const GlobeSection: React.FC = () => {
	return (
		<section className="py-32 bg-shopify-pine text-white overflow-hidden relative">
			<div className="max-w-(--width-container) mx-auto px-6 lg:px-12 relative z-(--z-content) grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-5 pt-10">
					<span className="text-shopify-green font-medium mb-2 block text-xl">
						Local and global
					</span>
					<h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
						Grow around the world
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Shopify takes the complexity out of international selling, from
						delivering products faster and more affordably to localizing your
						experience with Shopify Markets.
					</p>
					<a
						href="#"
						className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
					>
						Explore Global Selling
					</a>
				</div>
				<div className="lg:col-span-7 relative min-h-(--height-globe-min)">
					{/* Abstract Globe Representation using CSS and Images */}
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
						{/* Rotating Circle effect */}
						<div className="w-(--size-globe-large) h-(--size-globe-large) rounded-full border border-white/5 absolute animate-[spin_var(--duration-globe-spin-slow)_linear_infinite]" />
						<div className="w-(--size-globe-small) h-(--size-globe-small) rounded-full border border-white/10 absolute animate-[spin_var(--duration-globe-spin-fast)_linear_infinite_reverse]" />

						{/* Map Image Placeholder */}
						<img
							src="https://cdn.shopify.com/b/shopify-brochure2-assets/600a7b9e8074695ddb32d366f72d93d4.png"
							alt="Global Map"
							className="relative z-(--z-content) opacity-(--opacity-globe-map) mix-blend-screen"
						/>

						{/* Floating Cards Animation Simulation */}
						<div className="absolute top-10 right-10 bg-white text-black p-2 rounded-lg shadow-xl animate-bounce">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 rounded-full bg-blue-500"></div>
								<span className="font-bold text-sm">Order #1024</span>
							</div>
						</div>
						<div className="absolute bottom-20 left-10 bg-white text-black p-2 rounded-lg shadow-xl animate-pulse delay-700">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 rounded-full bg-red-500"></div>
								<span className="font-bold text-sm">$125.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GlobeSection;
