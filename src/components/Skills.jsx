import React from "react";
import { FaCode, FaLaptopCode, FaToolbox, FaDatabase, FaCloud, FaGithub, FaGitAlt, FaReact, FaPython, FaAws, FaGoogle, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

// Skills Data with Colors
const skills = [
  { name: "C", icon: <FaCode />, color: "#E34F26" }, // Orange
  { name: "C++", icon: <FaCode />, color: "#00599C" }, // Blue
  { name: "C#", icon: <FaCode />, color: "#68217A" }, // Purple
  { name: "HTML", icon: <FaCode />, color: "#E34F26" }, // Orange
  { name: "CSS", icon: <FaCode />, color: "#264DE4" }, // Blue
  { name: "JavaScript", icon: <FaCode />, color: "#F7DF1E" }, // Yellow
  { name: "SQL", icon: <FaDatabase />, color: "#336791" }, // Dark Blue
  { name: "MsSQL", icon: <FaDatabase />, color: "#CC2927" }, // Red
  { name: "Python", icon: <FaPython />, color: "#3776AB" }, // Blue
  { name: ".NET Core", icon: <FaLaptopCode />, color: "#512BD4" }, // Purple
  { name: ".NET MVC", icon: <FaLaptopCode />, color: "#512BD4" }, // Purple
  { name: "Entity Framework Core", icon: <FaLaptopCode />, color: "#512BD4" }, // Purple
  { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" }, // Light Blue
  { name: "React Native", icon: <FaReact />, color: "#61DAFB" }, // Light Blue
  { name: "AWS Cloud", icon: <FaAws />, color: "#FF9900" }, // Orange
  { name: "GCP", icon: <FaGoogle />, color: "#4285F4" }, // Google Blue
  { name: "GitHub", icon: <FaGithub />, color: "#181717" }, // Black
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" }, // Orange-Red
  { name: "Google Colab", icon: <FaCloud />, color: "#F4B400" }, // Yellow
  { name: "SSMS", icon: <FaServer />, color: "#CC2927" }, // Red
];

const Skills = () => {
  return (
    <section id = "skills"className="py-10 px-6 bg-white text-gray-900"> {/* Adjusted padding */}
      {/* Title */}
      <div className="text-center mb-6"> {/* Reduced bottom margin */}
        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wide text-center">
          What I’m Good At?
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#695aa6] mb-2 text-center"
          style={{ fontFamily: '"Indie Flower", cursive' }}
        >
          My Skills
        </h2>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap justify-center gap-5 text-lg">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-lg shadow-md text-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.15,
              boxShadow: `0px 8px 20px rgba(105, 90, 166, 0.4)`,
            }}
          >
            <span
              className="text-2xl"
              style={{
                color: skill.color, // Setting Icon Color
              }}
            >
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
