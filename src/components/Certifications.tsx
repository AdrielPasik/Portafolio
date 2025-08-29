import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
  description?: string;
  credentialId?: string;
  credentialUrl?: string;
  hours?: number; // Nuevo campo
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications: Certification[] = [
    {
      title: 'B2 First Certificate',
      issuer: 'Cambridge',
      year: '2021',
      icon: <Award className="w-6 h-6" />,
      description: 'Upper-intermediate English proficiency, including reading, writing, listening, and speaking skills.',
      // hours: 120, // Ejemplo si quieres agregar horas
    },
    {
      title: 'The Web Developer Bootcamp 2025',
      issuer: 'Udemy',
      year: '2025',
      icon: <Award className="w-6 h-6" />,
      description: 'Covered MongoDB, Node.js, Express, HTML, CSS, JavaScript, and full-stack web application development.',
      credentialId: 'UC-93510b43-47fe-49ab-8fb7-7c20fe48d254',
      credentialUrl: 'https://www.udemy.com/certificate/UC-93510b43-47fe-49ab-8fb7-7c20fe48d254/',
      hours: 74, 
    },
    {
      title: 'Solidity Smart Contract Development',
      issuer: 'Cyfrin Updraft',
      year: '2025',
      icon: <Award className="w-6 h-6" />,
      description: 'Learned blockchain developer fundamentals, Solidity smart contract development, custom errors, inheritance, gas optimization, and Ethereum developer workflow.',
      credentialId: 'QYT658HEN125',
      credentialUrl: 'https://profiles.cyfrin.io/u/adrielpasik/achievements/solidity',
      hours: 5,
    },
    {
      title: 'Foundry Fundamentals',
      issuer: 'Cyfrin Updraft',
      year: '2025',
      icon: <Award className="w-6 h-6" />,
      description: 'Learned advanced Solidity development with Foundry, including Forge and Anvil for testing and deployment, smart contract verification, and Chainlink oracle integration. Gained experience creating and testing local blockchain networks, writing unit/integration tests, and verifying contracts on Etherscan. Built a complete Smart Contract Lottery project with Foundry, available on GitHub.',
      credentialId: '8EDT6MCMWS7Y',
      credentialUrl: 'https://profiles.cyfrin.io/u/adrielpasik/achievements/foundry',
      hours: 10,
    },
    {
      title: 'Chainlink Fundamentals',
      issuer: 'Cyfrin Updraft',
      year: '2025',
      icon: <Award className="w-6 h-6" />,
      description:
        'Comprehensive introduction to Chainlink technology and services: oracles, data feeds, Proof of Reserve, CCIP, Chainlink Functions, VRF, and automation. Covered fundamentals for building and interacting with the Chainlink ecosystem. Included hands-on practice developing and testing smart contracts in Remix for each concept.',
      credentialId: 'JV889VHMM1HO',
      credentialUrl: 'https://profiles.cyfrin.io/u/adrielpasik/achievements/chainlink-fundamentals',
      hours: 6,
    },
  ];

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

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark-200 to-dark-300"
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
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          >
            Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-primary-700 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center mr-4">
                    <div className="text-primary-400">
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
                {cert.description && (
                  <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
                )}
                {cert.credentialId && cert.credentialUrl && (
                  <div className="text-gray-400 text-xs mt-2 flex flex-col sm:flex-row sm:items-center gap-1">
                    <span>
                      <strong>Credential ID:</strong> {cert.credentialId}
                    </span>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 underline hover:text-primary-300 ml-0 sm:ml-2"
                    >
                      See credential
                    </a>
                  </div>
                )}
                {cert.hours && (
                  <p className="text-gray-400 text-xs mt-1">
                    <strong>Hours:</strong> {cert.hours}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
