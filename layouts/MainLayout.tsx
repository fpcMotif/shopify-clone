import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
