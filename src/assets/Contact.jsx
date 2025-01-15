import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [state, handleSubmit] = useForm("movvbnwn");

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3730a3]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-green-400 mb-4 text-5xl">✓</div>
                <h3 className="text-2xl font-semibold text-white mb-2">Thank you!</h3>
                <p className="text-gray-300">Your message has been sent successfully.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 mt-1 text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 mt-1 text-sm" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {state.submitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-3xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="space-y-6">
              <a
                href="mailto:mohammed.ezzouak00@gmail.com"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300 group"
              >
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-blue-500/20">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <span>mohammed.ezzouak00@gmail.com</span>
              </a>
              <a
                href="https://github.com/MedEZZOUAK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300 group"
              >
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-blue-500/20">
                  <FaGithub className="h-6 w-6" />
                </div>
                <span>github.com/MedEZZOUAK</span>
              </a>
              <a
                href="https://linkedin.com/in/mohammed-ez-zouak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300 group"
              >
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-blue-500/20">
                  <FaLinkedin className="h-6 w-6" />
                </div>
                <span>linkedin.com/in/mohammed-ez-zouak</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;