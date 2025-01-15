import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const categories = ["all", "frontend", "backend", "data", "ai"];

  const projects = [
    {
      title: "Digitalisation des Procédures Administratives",
      shortDescription:
        "Automated administrative processes with React & Spring Boot.",
      longDescription:
        "Created two web platforms using React (frontend) and Spring Boot (backend) to automate the issuance of residence certificates and trade registers. This project modernized administrative processes as part of the Digital Morocco 2030 initiative. Implemented a microservices architecture with Docker Compose for scalability and secure data management.",
      technologies: [
        "React",
        "Spring Boot",
        "Docker",
        "Microservices",
        "RESTful API",
      ],
      category: "fullstack",
      link: "https://github.com/Ayuubakb/Urbanisme",
      images: [
        "../../public/Urbanisme/EurekaRegistry.png",
        "../../public/Urbanisme/useCase1.jpg",
        "../../public/Urbanisme/useCase2.jpg",
      ],
      status: "completed",
      year: "2025",
      report: "../../public/Urbanisme/Urabanisme.pdf",
    },
    {
      title: "PhD Enrollment System",
      shortDescription:
        "Streamlined PhD enrollment with Angular & Spring Boot.",
      longDescription:
        "Designed and developed a web application for managing PhD enrollments using Angular (frontend) and Spring Boot (backend). Implemented Redis for caching to accelerate backend response times. The system streamlined administrative tasks, improving efficiency and user experience for both students and administrators.",
      technologies: [
        "Angular",
        "Spring Boot",
        "Docker",
        "Redis",
        "RESTful API",
        "JWT Authentication",
      ],
      category: "fullstack",
      link: "https://github.com/MedEZZOUAK/Full-project",
      images: ["../../public/PhD/Register.jpeg", "../../public/PhD/Screenshot 2025-01-15 195844.jpeg", "../../public/PhD/Screenshot 2025-01-15 195916.jpeg"],
      status: "completed",
      year: "2024",
      report: "../../public/PhD/GestionDoctorat.pdf",
    },
    {
      title: "Kafka Data Streaming Application",
      shortDescription: "Real-time data streaming with Kafka & Spring Boot.",
      longDescription:
        "Developed a Spring Boot application integrated with Kafka for processing and displaying real-time data from a web socket. The application was designed for scalability, allowing real-time data flow to enhance information availability for web-based interfaces and databases.",
      technologies: [
        "Spring Boot",
        "Kafka",
        "Docker",
        "Real-Time Data",
        "WebSocket",
      ],
      category: "backend",
      link: "https://github.com/your-repo",
      images: ["/kafka-dashboard.jpg", "/kafka-metrics.jpg"],
      status: "completed",
      year: "2023",
    },
    {
      title: "Taxi Data ETL Pipeline",
      shortDescription:
        "Efficient data processing with Mage, GCS, and BigQuery.",
      longDescription:
        "Designed and deployed an ETL pipeline using Mage, Google Cloud Storage (GCS), and BigQuery for processing and analyzing large taxi datasets. Integrated Google Looker Studio for interactive data visualization, enabling efficient data processing and analysis of large volumes of data.",
      technologies: ["Mage", "GCS", "BigQuery", "ETL", "Google Looker Studio"],
      category: "data",
      link: "https://github.com/your-repo",
      images: ["/etl-pipeline.jpg", "/data-viz.jpg"],
      status: "completed",
      year: "2023",
    },
    {
      title: "AI Cardiovascular Disease Prediction",
      shortDescription: "Predictive model for cardiovascular disease risks.",
      longDescription:
        "Developed a Python-based machine learning model to assess cardiovascular disease risks. The model used data-driven insights to support decision-making in healthcare applications, providing a predictive tool for early risk assessment.",
      technologies: [
        "Python",
        "Machine Learning",
        "Pandas",
        "Scikit-learn",
        "Data Analysis",
      ],
      category: "ai",
      link: "https://github.com/your-repo",
      images: ["/ml-model.jpg", "/predictions.jpg"],
      status: "completed",
      year: "2023",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3730a3]"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800/30 text-gray-400 hover:bg-gray-800/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-blue-500/50"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
              onClick={() => {
                if (selectedProject) {
                  setSelectedProject(null);
                }
                if (fullScreenImage) {
                  setFullScreenImage(null);
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.8, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 100 }}
                className="bg-gray-900/90 backdrop-blur-md rounded-xl p-8 max-w-4xl w-full relative border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedProject.images?.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Project preview ${idx + 1}`}
                      className="rounded-lg w-full h-48 object-cover cursor-pointer transition-transform hover:scale-105"
                      onClick={() => setFullScreenImage(image)}
                    />
                  ))}
                </div>
                <AnimatePresence>
                  {fullScreenImage && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                      onClick={() => setFullScreenImage(null)}
                    >
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setFullScreenImage(null)}
                          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                        >
                          <FaTimes size={24} />
                        </button>
                        <img
                          src={fullScreenImage}
                          alt="Full screen view"
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition duration-300"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </a>
                    {selectedProject.report && (
                      <a
                        href={selectedProject.report}
                        download
                        className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition duration-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Download Report
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
