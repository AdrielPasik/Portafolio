import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Code, Search, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const traits = [
    {
      icon: <Rocket className="w-6 h-6 text-secondary-400" />,
      title: 'Entrepreneurial',
      description: 'Creating value through innovative solutions',
    },
    {
      icon: <Code className="w-6 h-6 text-secondary-400" />,
      title: 'Developer',
      description: 'Writing efficient code to solve real problems',
    },
    {
      icon: <Search className="w-6 h-6 text-secondary-400" />,
      title: 'Curious',
      description: 'Always exploring new technologies and ideas',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-secondary-400" />,
      title: 'Communicator',
      description: 'Sharing ideas clearly and connecting with others',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark-300 to-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            I’m a 21-year-old fourth-year Software Engineering student from Argentina, passionate about leveraging technology to create positive change. I’m also deeply curious and driven by a love for learning and science, always eager to explore new ideas and expand my knowledge. My entrepreneurial journey began with co-hosting the Infinity Explorers podcast, where my co-host and I interviewed experts in technology and science, sharing cutting-edge ideas with a global audience. Later, I expanded this journey by launching the Pinta Libre franchise in Paraná, helping local businesses attract more customers through innovative solutions.

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Currently, my main interest in technology lies in Web3 and blockchain systems. I’m working as a research assistant on a university-led blockchain interoperability project. While I use full-stack development skills to support my work, I focus on exploring decentralized technologies that could reshape the future.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-100/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800 hover:border-secondary-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">{trait.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {trait.title}
                  </h3>
                </div>
                <p className="text-gray-400">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;