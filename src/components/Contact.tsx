import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactItems = [
    {
      platform: 'Email',
      value: 'adriel.pasik@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:adriel.pasik@gmail.com',
      color: 'text-red-400',
      hoverColor: 'hover:text-red-300',
    },
    {
      platform: 'GitHub',
      value: 'AdrielPasik',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/AdrielPasik',
      color: 'text-gray-400',
      hoverColor: 'hover:text-gray-300',
    },
    {
      platform: 'LinkedIn',
      value: 'adriel-pasik-533a77271',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/adriel-pasik-533a77271/',
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-300',
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
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark-200 to-dark-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 mb-12"
          >
            If you want to work together or just have a question, don’t hesitate to contact. Thanks for stopping by my portfolio—I’m always interested in new ideas and collaborations.
          </motion.p>
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 bg-dark-100/50 rounded-lg border border-gray-800 hover:border-secondary-700 transition-all duration-300 ${item.hoverColor}`}
              >
                <div className={`mr-4 ${item.color}`}>{item.icon}</div>
                <div>
                  <h3 className="text-white font-medium">{item.platform}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;