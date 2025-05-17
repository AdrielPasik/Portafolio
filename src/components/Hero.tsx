import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-secondary-900/90 to-primary-900/90 animate-gradient-xy"></div>
      
      {/* Animated star field effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:32px_32px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px] animate-[spin_100s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-300 via-secondary-300 to-accent-300 animate-gradient-x"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Adriel Pasik
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building the future through code and creativity
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              className="bg-secondary-600 text-white px-8 py-3 rounded-full font-medium shadow-neon transition-all duration-500 transform hover:scale-105 hover:shadow-neon-hover hover:bg-secondary-500"
              onClick={() => {
                document.querySelector('#projects')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        onClick={handleScrollDown}
      >
        <ChevronDown className="w-8 h-8 text-accent-400 animate-float" />
      </motion.div>
    </section>
  );
};

export default Hero;