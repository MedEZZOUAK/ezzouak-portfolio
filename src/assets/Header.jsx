import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaBars, FaTimes } from "react-icons/fa";
import { BiCodeAlt, BiCloud } from "react-icons/bi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3730a3]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      {/* Navigation Bar */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            <FaCode className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110" />
          </motion.div>
          
          <button
          aria-label="Toggle Mobile Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
          <div className="hidden md:flex space-x-12">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="hidden md:flex space-x-6">
            <SocialLink href="https://github.com/MedEZZOUAK" tooltip="GitHub">
              <FaGithub className="text-2xl" />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/mohammed-ez-zouak" tooltip="LinkedIn">
              <FaLinkedin className="text-2xl" />
            </SocialLink>
            <SocialLink href="mailto:mohammed.ezzouak00@gmail.com" tooltip="Email">
              <FaEnvelope className="text-2xl" />
            </SocialLink>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="flex space-x-6 mt-4">
              <SocialLink href="https://github.com/MedEZZOUAK" tooltip="GitHub">
                <FaGithub className="text-2xl" />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/mohammed-ez-zouak" tooltip="LinkedIn">
                <FaLinkedin className="text-2xl" />
              </SocialLink>
              <SocialLink href="mailto:mohammed.ezzouak00@gmail.com" tooltip="Email">
                <FaEnvelope className="text-2xl" />
              </SocialLink>
            </div>
          </div>
        )}
      </nav>
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <img
            loading="lazy"
            src="/profil.JPG"
            alt="Mohammed Ez Zouak"
            className="w-48 h-48 rounded-full mx-auto border-4 border-blue-400 shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Mohammed EZ-ZOUAK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-12 text-gray-300"
        >
          Software Engineer & Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <BiCodeAlt className="text-3xl text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110" />
          <FaDatabase className="text-3xl text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-110" />
          <BiCloud className="text-3xl text-pink-400 hover:text-pink-300 transition-all duration-300 transform hover:scale-110" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <CTAButton href="#projects">View Projects</CTAButton>
          <CTAButton href="#contact" secondary>Get in Touch</CTAButton>
          <CTAButton href="../../public/CV_Mohammed_EZZOUAK.pdf" secondary>Download CV</CTAButton>
        </motion.div>
      </div>
    </header>
  );
}

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="block md:inline-block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </a>
);

const SocialLink = ({ href, children, tooltip }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    {children}
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {tooltip}
    </span>
  </a>
);

const CTAButton = ({ href, children, secondary }) => (
  <a
    href={href}
    className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
      secondary
        ? "bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10"
        : "bg-blue-400 text-white hover:bg-blue-500"
    }`}
  >
    {children}
  </a>
);

export default Header;