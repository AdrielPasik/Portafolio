import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target } from 'lucide-react';

const Focus: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="focus"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark-300 to-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-secondary-900/50 flex items-center justify-center">
              <Target className="w-8 h-8 text-secondary-400" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Currently Building
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I'm currently focused on learning Solidity and exploring the development of decentralized applications (DApps) on blockchain platforms. I'm getting familiar with tools like Hardhat, Remix, and MetaMask to understand how to develop, test, and deploy smart contracts. My main goal is to deepen my knowledge of Web3 technologies and discover innovative ways to combine entrepreneurship with decentralized tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Focus;