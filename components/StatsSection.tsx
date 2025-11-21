import React from 'react';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {
  return (
    <section className="py-32 bg-shopify-pine text-white relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-shopify-green/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            The world’s best-converting checkout
          </h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="border-t border-shopify-green/30 pt-6">
              <p className="text-shopify-green uppercase tracking-wider text-sm font-semibold mb-2">Higher Conversions</p>
              <div className="flex items-baseline">
                <span className="text-6xl font-bold">15</span>
                <span className="text-4xl font-bold text-shopify-green">%</span>
              </div>
            </div>
            <div className="border-t border-shopify-green/30 pt-6">
              <p className="text-shopify-green uppercase tracking-wider text-sm font-semibold mb-2">Buy-ready Shoppers</p>
              <div className="flex items-baseline">
                <span className="text-6xl font-bold">150</span>
                <span className="text-4xl font-bold text-shopify-green">M+</span>
              </div>
            </div>
          </div>

          <div className="mt-12 pl-6 border-l-2 border-shopify-green">
            <p className="text-lg text-gray-300 leading-relaxed">
              Shopify Checkout converts 15% higher on average than other commerce platforms and exposes your brand to 150 million buy-ready shoppers.
            </p>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/e13a9d629203911057631b827da7256f.png?originalWidth=1920&originalHeight=1732&width=1000" 
              alt="Shopify Checkout Interface"
              className="w-full h-auto"
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-10 right-10 bg-[#5a31f4] p-4 rounded-lg shadow-xl"
            >
              <img src="https://cdn.shopify.com/b/shopify-brochure2-assets/c2f9189345f7cf7e1aabe7db3443a4c0.png" alt="Shop Pay" className="h-6 w-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;