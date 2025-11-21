import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const words = [
  "big thing",
  "one to watch",
  "category creator",
  "household name",
  "global empire",
  "solo flier",
  "store they line up for"
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-shopify-dark flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shopify-dark/30 via-transparent to-shopify-dark z-10" />
        <img 
           src="https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080"
           className="w-full h-full object-cover opacity-60"
           alt="Hero Background"
        />
        {/* Actual video would be here, using image for stability in clone */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Be the next <br />
            <div className="h-[1.1em] overflow-hidden relative inline-block align-top text-shopify-green">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-xl mb-10 leading-relaxed font-light">
            Dream big, build fast, and grow far on Shopify.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="#" 
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-shopify-green transition-all duration-300 flex items-center gap-2 group"
            >
              Start for free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="flex items-center gap-3 px-6 py-4 text-white font-medium hover:bg-white/10 rounded-full transition-colors border border-white/20 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                <Play size={14} fill="currentColor" />
              </div>
              Why we build Shopify
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-shopify-dark to-transparent z-20" />
    </section>
  );
};

export default Hero;