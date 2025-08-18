import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences: ExperienceItem[] = [
    {
      title: 'Franchise Owner and Entrepreneur',
      company: 'Pinta Libre',
      location: 'Paraná, Entre Ríos',
      period: 'Aug. 2024 – Feb. 2025',
      description: 'Led the launch and growth of Pinta Libre, a mobile app franchise, in the city of Paraná. Focused on helping local bars and restaurants attract more customers and fill empty seats by connecting them with users through exclusive in-app promotions. Aligned with the brand’s mission to democratize entrepreneurship and support small business growth..',
      achievements: [
        'Managed partnerships with bars and restaurants',
        'Developed marketing campaigns',
        'Created proposals to increase bar participation on the platform',
      ],
    },
    {
      title: 'Co-Host and Content Producer',
      company: 'Infinity Explorers Podcast',
      location: 'Buenos Aires',
      period: 'Aug. 2022 – Jan. 2024',
      description: 'Co-hosted a podcast interviewing tech and science experts. Managed post-production (audio/video editing) and social media promotion. Strengthened multimedia and project management skills.',
    },
    {
      title: 'Non-Formal Education Leader',
      company: 'Centro Juventud Sionista',
      location: 'Paraná, Entre Ríos',
      period: 'Sep. 2019 – Feb. 2022',
      description: 'Led and coordinated groups of children and teenagers in educational and recreational activities. Developed skills in team management, collaborative learning, conflict resolution, and event planning.',
    },
    {
      title: 'Research Assistant – Blockchain Interoperability Project',
      company: 'University Research Team',
      location: 'Buenos Aires',
      period: 'Mar. 2025 – Present',
      description:
        'Contributed to a university research project focused on blockchain interoperability. Supported protocol analysis, technical documentation, and proof-of-concept implementations. Deepened knowledge in decentralized technologies, smart contracts, and cross-chain communication.',
      achievements: [
        'Assisted in protocol analysis and technical documentation',
        'Collaborated on proof-of-concept blockchain solutions',
        'Expanded expertise in cross-chain communication systems',
      ],
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
      id="experience"
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
            Work Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-secondary-700 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-secondary-400 mb-2">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                {exp.achievements && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-400">
                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2 mt-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;