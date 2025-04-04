import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Chatup from "../assets/Projects/ChatUp.png";
import Ocr from "../assets/Projects/Ocr.gif";
import Railway from "../assets/Projects/Railway.jpeg";
import Portfolio from "../assets/Projects/Portfolio.png";
import Gpu from "../assets/Projects/Gpu.png";
import Qr from "../assets/Projects/Qr.webp";
// Sample Project Data
const projects = [
  {
    id: 1,
    name: "ChatUp 👻",
    description: "Chat Application with real-time messaging and notifications.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    type: "Web Application",
    github: "https://github.com/arjunv2003/Chat-Up",
    image: Chatup,
    details:
      "Developed a full-stack chat application with real-time messaging using Socket.io and Node.js. Implemented user authentication and notifications.",
  },
  {
    id: 2,
    name: "Document Parsing and OCR API",
    description:
      "A Flask-based API that extracts text from PDFs, performs OCR on images, and converts Word documents (DOCX/DOC) to PDF.",
    tech: ["Python"],
    type: "ML",
    github: "https://github.com/arjunv2003/OCR-Multiprocessing",
    image: Ocr,
    details:
      "Supports text and image-based PDFs,Uses OCR to extract text from images.Converts Word files to PDF.Secure API key authentication.Fast processing with multiprocessing.",
  },
  {
    id: 3,
    name: "Railway Network Simulation",
    description: "A simulation of a railway network with real-time tracking.",
    tech: ["C++"],
    type: "SDE Project",
    github: "https://github.com/arjunv2003/Railway-Network-Simulation",
    image: Railway,
    details:
      "Simulates a railway network with real-time tracking of trains and stations. Built using C++ for efficient performance.",
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills.",
    tech: ["ReactJs", "EmailJs", "Tailwind CSS"],
    type: "Web Application",
    github: "https://github.com/arjunv2003/Portfolio",
    image: Portfolio,
    details:
      "A personal portfolio website built with React.js and Tailwind CSS. It showcases my projects, skills, and experience. The website is responsive and includes a contact form powered by EmailJS.",
  },
  {
    id: 5,
    name: "Gpu Pipeline BTP",
    description: "A project focused on GPU pipeline optimization.",
    tech: ["CUDA", "C++"],
    type: "SDE Project",
    github: "https://github.com/arjunv2003/Gpu-pipeline-BTP",
    image: Gpu,
    details:
      "A project focused on optimizing GPU pipelines for improved performance. Utilized CUDA and C++ for efficient processing.",
  },
  {
    id: 6,
    name: "Qr Generator",
    description: "A QR code generator using Python for correct redirection.",
    tech: ["Python"],
    type: "SDE Project",
    github: "",
    image: Qr,
    details:
      "A QR code generator built with Python. It allows users to create QR codes that redirect to specific URLs By getting Device type (Android,IOS,Pc). The project demonstrates the use of libraries for QR code generation. Useful for marketting single qr for ios and app store redirection.",
  },
];

// Filter Categories
const filters = ["All", "Web Application", "ML", "SDE Project"];

const TimelineProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Filtered Projects
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);

  // Limit projects to 3 if not expanded
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-16 px-6 bg-white text-gray-900">
      <div className="text-center">
        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wide text-center">
          What I've Built?
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#695aa6] mb-4 text-center"
          style={{ fontFamily: '"Indie Flower", cursive' }}
        >
          My Projects
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setSelectedFilter(filter);
              setShowAll(false); // Reset on filter change
            }}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedFilter === filter
                ? "bg-[#695aa6] text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Timeline Container */}
      <div className="relative mt-12">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex items-center w-full mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Circle Indicator */}
            <div className="absolute left-1/2 w-8 h-8 bg-[#695aa6] rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2">
              {index + 1}
            </div>

            {/* Content Box */}
            <div
              className={`relative flex items-center max-w-lg p-6 bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 transition ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              {/* Text */}
              <div>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#695aa6] text-white px-3 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredProjects.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#695aa6] text-white px-6 py-2 rounded-full text-lg hover:bg-[#483d8b] transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-opacity-70 flex justify-center items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-gray-900 p-6 rounded-lg max-w-lg shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {selectedProject.description}
              </p>
              <p className="text-gray-800 mt-2">{selectedProject.details}</p>

              <div className="flex justify-between mt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="text-[#695aa6] hover:text-[#483d8b]"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TimelineProjects;
