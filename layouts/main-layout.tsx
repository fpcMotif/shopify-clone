import type React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer";
import Header from "@/components/header";

const MainLayout: React.FC = () => {
	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-shopify-dark selection:bg-shopify-green selection:text-black">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
