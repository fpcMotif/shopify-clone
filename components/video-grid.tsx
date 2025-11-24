import { ArrowRight } from "lucide-react";
import type React from "react";

const VideoGrid: React.FC = () => {
	return (
		<section className="py-24 bg-shopify-dark text-white">
			<div className="max-w-(--width-container) mx-auto px-6 lg:px-12">
				<div className="mb-16">
					<span className="text-shopify-green font-medium mb-2 block text-xl">
						Online and in person
					</span>
					<h2 className="text-4xl md:text-5xl font-bold">
						Sell here, there, and everywhere
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-(--height-video-grid)">
					{/* Large Card */}
					<div className="md:col-span-3 rounded-2xl overflow-hidden relative group border border-white/10 bg-shopify-pine">
						<div className="absolute inset-0 z-(--z-background)">
							<img
								src="https://cdn.shopify.com/b/shopify-brochure2-assets/2f453878745c0b0eda5463111c3af909.png?originalWidth=4075&originalHeight=1920&width=1600"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								alt="Online Store"
							/>
						</div>
						<div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-linear-to-t from-black/90 to-transparent">
							<h3 className="text-2xl font-bold mb-2">Get a stunning store</h3>
							<p className="text-gray-300 max-w-lg">
								Design fast with AI, choose a stylish theme, or build completely
								custom for full control.
							</p>
						</div>
					</div>

					{/* POS Card */}
					<div className="md:col-span-1 rounded-2xl overflow-hidden relative group border border-white/10 bg-shopify-pine">
						<img
							src="https://cdn.shopify.com/b/shopify-brochure2-assets/efaa1bb70c643a68c30396bea2d2e756.png?originalWidth=1399&originalHeight=1628&width=800"
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top"
							alt="POS"
						/>
						<div className="absolute bottom-0 left-0 w-full p-8 z-(--z-content) bg-linear-to-t from-black/90 to-transparent">
							<h3 className="text-xl font-bold mb-2 flex items-center gap-2">
								In-person POS{" "}
								<ArrowRight
									size={16}
									className="opacity-0 group-hover:opacity-100 transition-opacity"
								/>
							</h3>
							<p className="text-gray-300 text-sm">
								Sell face to face and keep offline and online sales in sync.
							</p>
						</div>
					</div>

					{/* Channels Card */}
					<div className="md:col-span-1 rounded-2xl overflow-hidden relative group border border-white/10 bg-shopify-pine">
						<img
							src="https://cdn.shopify.com/b/shopify-brochure2-assets/c5e5a4493241f215f4f61c3458b11ce1.png?originalWidth=1632&originalHeight=1936&width=800"
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							alt="Social Channels"
						/>
						<div className="absolute bottom-0 left-0 w-full p-8 z-(--z-content) bg-linear-to-t from-black/90 to-transparent">
							<h3 className="text-xl font-bold mb-2">
								Publish across channels
							</h3>
							<p className="text-gray-300 text-sm">
								Show up where shoppers scroll, search, and shop.
							</p>
						</div>
					</div>

					{/* Checkout Card */}
					<div className="md:col-span-1 rounded-2xl overflow-hidden relative group border border-white/10 bg-shopify-pine flex flex-col">
						<div className="grow flex items-center justify-center bg-shopify-dark relative overflow-hidden">
							{/* Rive animation placeholder */}
							<div className="w-32 h-40 bg-white/10 rounded-lg animate-pulse"></div>
						</div>
						<div className="p-8 z-10 bg-shopify-pine">
							<h3 className="text-xl font-bold mb-2">World's best checkout</h3>
							<p className="text-gray-300 text-sm">
								Optimized to close more sales.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VideoGrid;
