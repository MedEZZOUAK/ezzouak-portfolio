import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaTools, FaLayerGroup, FaBrain } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaCode className="text-4xl" />,
      category: "Programming & Languages",
      description: "Experience in various programming paradigms and languages for software development.",
      items: ["Python", "Java", "JavaScript", "SQL", "PHP", "Bash"],
      color: "blue",
    },
    {
      icon: <FaLayerGroup className="text-4xl" />,
      category: "Backend Development",
      description: "Knowledge in building server-side applications and microservices architecture.",
      items: ["Spring Boot", "RESTful APIs", "Kafka", "Microservices", "Security"],
      color: "purple",
    },
    {
      icon: <FaBrain className="text-4xl" />,
      category: "Frontend Development",
      description: "Creating user interfaces with modern frameworks.",
      items: ["React", "HTML5", "CSS3"],
      color: "pink",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      category: "Database & Storage",
      description: "Experience with various database systems and data modeling techniques.",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "OracleDB", "Database Design"],
      color: "green",
    },
    {
      icon: <FaCloud className="text-4xl" />,
      category: "Cloud & DevOps",
      description: "Implementation of cloud infrastructure and CI/CD pipelines.",
      items: ["GCP", "Docker", "Terraform","CI/CD"],
      color: "yellow",
    },
    {
      icon: <FaTools className="text-4xl" />,
      category: "Data Engineering",
      description: "Building data pipelines and ETL processes for data transformation.",
      items: ["ETL", "Apache Airflow", "PySpark", "Pandas", "Data Warehousing", "Mage","DBT","BigQuery","PentaHo","PowerBI"],
      color: "red",
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3730a3]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive expertise across the full software development stack, with a focus on building scalable, 
            efficient, and maintainable solutions using modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50"
            >
              <div className={`text-${skill.color}-400 mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.category}</h3>
              <p className="text-gray-400 mb-4 text-sm">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`bg-${skill.color}-400/10 text-${skill.color}-400 px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;