import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaCogs } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3730a3]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-300 space-y-6"
          >
            <p>
              Final-year <span className="text-purple-400 font-semibold">Computer Engineering</span> student at 
              <span className="text-green-400 font-semibold"> ENSA Tétouan</span>. I'm 
              <span className="text-blue-400 font-semibold"> Mohammed EZ-ZOUAK</span>, focusing on 
              <span className="text-pink-400 font-semibold"> Backend Development</span> and 
              <span className="text-yellow-400 font-semibold"> Data Engineering</span>.
            </p>
            <p>
              My expertise includes developing 
              <span className="text-blue-400 font-semibold"> scalable microservices</span>, 
              <span className="text-purple-400 font-semibold"> data pipelines</span>, and 
              <span className="text-green-400 font-semibold"> cloud-native applications</span>. I specialize in building robust systems that drive business value through automation and optimization.
            </p>
            <p>
              Available for a <span className="text-pink-400 font-semibold">6-month end-of-studies internship</span> from February 2025. Looking to contribute to innovative projects in software development or data engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <ExpertiseCard 
              icon={<FaLaptopCode />}
              title="Full-Stack Development"
              description="React frontend development with responsive UI/UX. Spring Boot backend implementation with robust API design and security."
              color="blue"
            />
            <ExpertiseCard 
              icon={<FaServer />}
              title="Backend & Microservices"
              description="Microservices architecture using Spring Boot, RESTful APIs, and event-driven systems with Apache Kafka."
              color="purple"
            />
            <ExpertiseCard 
              icon={<FaDatabase />}
              title="Data Engineering"
              description="ETL pipeline development using Mage, data warehousing with BigQuery, and real-time streaming with Kafka."
              color="pink"
            />
            <ExpertiseCard 
              icon={<FaCloud />}
              title="Cloud & DevOps"
              description="GCP cloud infrastructure, Docker containerization, and IaC with Terraform. CI/CD pipeline implementation."
              color="green"
            />
            <ExpertiseCard 
              icon={<FaCogs />}
              title="Automation & Optimization"
              description="Workflow automation, performance optimization, and scheduled task management with cron jobs."
              color="yellow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const ExpertiseCard = ({ icon, title, description, color }) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
    <div className={`text-4xl text-${color}-400`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default About;