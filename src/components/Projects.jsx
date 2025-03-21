import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Sample Project Data
const projects = [
  {
    id: 1,
    name: "WebApp One",
    description: "A powerful web application built with React and Node.js.",
    tech: ["React", "Node.js", "MongoDB"],
    type: "Web Application",
    github: "https://github.com/example/webapp-one",
    image: "https://via.placeholder.com/300",
    details: "This project focuses on building a scalable web platform...",
  },
  {
    id: 2,
    name: "Machine Learning Model",
    description: "An ML model for image classification using TensorFlow.",
    tech: ["Python", "TensorFlow", "Keras"],
    type: "ML",
    github: "https://github.com/example/ml-model",
    image: "https://via.placeholder.com/300",
    details: "Implemented CNN architecture for accurate image recognition...",
  },
  {
    id: 3,
    name: "SDE Project",
    description: "A scalable backend system for high-traffic applications.",
    tech: ["Go", "Redis", "PostgreSQL"],
    type: "SDE Project",
    github: "https://github.com/example/sde-project",
    image: "https://via.placeholder.com/300",
    details: "Designed an optimized caching layer for faster response times...",
  },
  {
    id: 4,
    name: "WebApp Two",
    description: "Another great web app using modern stacks.",
    tech: ["Vue", "Firebase"],
    type: "Web Application",
    github: "https://github.com/example/webapp-two",
    image: "https://via.placeholder.com/300",
    details: "Built with Vue.js and Firebase for real-time updates...",
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
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects"className="py-16 px-6 bg-white text-gray-900">
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
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-6"
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
              <h3 className="text-2xl font-bold mt-4">{selectedProject.name}</h3>
              <p className="text-gray-600 mt-2">{selectedProject.description}</p>
              <p className="text-gray-800 mt-2">{selectedProject.details}</p>

              <div className="flex justify-between mt-4">
                <a href={selectedProject.github} target="_blank" className="text-[#695aa6] hover:text-[#483d8b]">
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
