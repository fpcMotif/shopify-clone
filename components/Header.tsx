import { ChevronDown, Menu } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 20;

const Header: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > SCROLL_THRESHOLD);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-(--z-header) transition-all duration-300 ${scrolled
				? "bg-shopify-dark/95 backdrop-blur-sm border-b border-white/10 py-(--spacing-header-scroll)"
				: "bg-transparent py-(--spacing-header-default)"
				}`}
		>
			<div className="max-w-(--width-container) mx-auto px-6 lg:px-12 flex items-center justify-between">
				<div className="flex items-center gap-8">
					<a href="/" className="shrink-0">
						<img
							src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
							alt="Shopify"
							className="h-8 w-auto invert" // Invert needed because logo is usually black in this SVG URL, simplified for dark mode
						/>
					</a>

					<nav className="hidden lg:flex items-center gap-6">
						{["Why Shopify", "Products", "Pricing", "Enterprise"].map(
							(item) => (
								<div
									key={item}
									className="group relative px-2 py-2 cursor-pointer"
								>
									<div className="flex items-center gap-1 text-white font-medium text-sm hover:text-gray-300 transition-colors">
										{item}
										{["Why Shopify", "Products"].includes(item) && (
											<ChevronDown
												size={14}
												className="group-hover:rotate-180 transition-transform duration-300"
											/>
										)}
									</div>
									{/* Dropdown simulation - kept simple for demo */}
									{["Why Shopify", "Products"].includes(item) && (
										<div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
											<div className="bg-surface border border-white/10 rounded-lg p-6 w-(--width-dropdown) shadow-2xl">
												<p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">
													Explore
												</p>
												<ul className="space-y-3">
													<li className="text-white hover:text-shopify-green cursor-pointer transition-colors">
														Overview
													</li>
													<li className="text-white hover:text-shopify-green cursor-pointer transition-colors">
														Success Stories
													</li>
													<li className="text-white hover:text-shopify-green cursor-pointer transition-colors">
														Plus Enterprise
													</li>
												</ul>
											</div>
										</div>
									)}
								</div>
							),
						)}
					</nav>
				</div>

				<div className="flex items-center gap-6">
					<a
						href="/login"
						className="hidden lg:block text-white font-medium text-sm hover:text-gray-300"
					>
						Log in
					</a>
					<a
						href="/start"
						className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-shopify-green transition-all duration-300 transform hover:scale-105"
					>
						Start for free
					</a>
					<button type="button" className="lg:hidden text-white">
						<Menu size={24} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
