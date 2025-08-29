import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Server,
  Database,
  Blocks,
  MessagesSquare,
  Lightbulb,
  Users,
  Brain,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Core Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        'Backend: Node.js, Spring Boot',
        'Databases: SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Redis, Neo4j, Cassandra)',
        'Languages: JavaScript, Java, Python',
      ],
    },
    {
      title: 'Frontend',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        'React.js (with UI libraries), HTML, CSS',
        'Android Studio with Java (learning)',
        'Kotlin Multiplatform (learning)',
      ],
    },
    {
      title: 'Blockchain',
      icon: <Blocks className="w-6 h-6" />,
      skills: [
        'Solidity & Smart Contract Development',
        'Foundry, Web3 & dApps fundamentals',
      ],
    },
    {
      title: 'Engineering Foundations',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        'Algorithms & Data Structures',
        'System Design & Debugging',
        'Agile Methodologies & Code Reviews',
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: [
        'Problem Solving & Critical Thinking',
        'Teamwork & Collaboration',
        'Communication & Technical Writing',
        'Initiative & Ownership',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark-300 to-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          🚀 Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-100/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-800/50 flex items-center justify-center mr-3 text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-400 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;