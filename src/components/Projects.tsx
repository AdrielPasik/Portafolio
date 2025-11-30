import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrls?: { label: string; url: string }[];
  image: string;
}


const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      title: 'YelpCamp',
      description:
        'A comprehensive camping web application that allows users to discover, review, and share camping experiences. Features include user authentication, image uploads, and interactive maps.',
      technologies: ['MongoDB', 'Node.js', 'Express', 'Javascript', 'Cloudinary', 'MapBox', 'JWT', 'Bootstrap'],
      liveUrl: 'https://yelp-camp-98q3.onrender.com/',
      githubUrls: [
        {
          label: 'Repo',
          url: 'https://github.com/AdrielPasik/yelp-camp',
        },
      ],
      image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Building Complaint System',
      description:
        'Final project for the Interactive Applications course. A fullstack platform for managing apartment complaints, featuring user authentication with separate roles for administrators and residents. Complaints are organized by building zones, and the system includes file uploads, status tracking, and detailed reports for administrators. Additional features like notifications and activity logging enhance the overall management experience.',
      technologies: ['SQL', 'Spring Boot', 'Java', 'Firebase', 'JWT', 'React', 'Ant Design'],
      githubUrls: [
        {
          label: 'Frontend Repo',
          url: 'https://github.com/Uade-Team-Adriel-Alan/Front-End-Gestion-Reclamos',
        },
        {
          label: 'Backend Repo',
          url: 'https://github.com/Uade-Team-Adriel-Alan/gestionDeReclamos',
        },
      ],
      image: 'https://images.pexels.com/photos/2977513/pexels-photo-2977513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Algorithms Cup',
      description:
        'Finalist in a 2-month Python coding tournament at university. Developed efficient algorithmic solutions to complex problems, optimizing for performance and code quality.',
      technologies: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Foundry Smart Contract Lottery',
      description:
        'A decentralized, provably fair lottery smart contract system built with Solidity and Foundry. Integrates Chainlink VRF for verifiable randomness and Chainlink Automation for automated winner selection. Developed as part of the Cyfrin Updrafts "Foundry Fundamentals" course.',
      technologies: ['Solidity', 'Foundry', 'Chainlink VRF', 'Chainlink Automation', 'Ethereum'],
      githubUrls: [
        {
          label: 'Repo',
          url: 'https://github.com/AdrielPasik/foundry-smart-contract-lottery',
        },
      ],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Blockchain network image
      // Alternativas:
      // 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' (pantalla de código)
      // 'https://images.pexels.com/photos/5980867/pexels-photo-5980867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' (cadena digital)
    },
    {
      title: 'Expense OCR & Smart Receipt Parser',
      description:
        'Web app that digitizes receipts using a multi-pass OCR pipeline (Tesseract + OpenCV) and domain-specific heuristics to extract structured financial data. Backend (FastAPI) exposes a production-ready endpoint returning diagnostic JSON; frontend (Next.js + TS) provides an uploader UI, per-ticket cards and a finance summary dashboard.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'FastAPI',
        'Python',
        'Tesseract / pytesseract',
        'OpenCV (opencv-python)',
        'NumPy',
        'Uvicorn',
      ],
      githubUrls: [
        {
          label: 'Frontend Repo',
          url: 'https://github.com/AdrielPasik/clasificador_gastos_front',
        },
        {
          label: 'Backend Repo',
          url: 'https://github.com/AdrielPasik/clasificador_gastos',
        },
      ],
      image: 'https://images.pexels.com/photos/6208225/pexels-photo-6208225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gradient-to-b from-dark-200 to-dark-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-100/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary-900/20 transition-all duration-500 border border-gray-800 hover:border-secondary-700 group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-secondary-900/50 text-secondary-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  )}
                  {project.githubUrls?.map((repo, idx) => (
                    <a
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" /> {repo.label}
                    </a>
                  ))}

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;