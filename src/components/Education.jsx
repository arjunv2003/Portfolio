import React from "react";
import { motion } from "framer-motion"; // For smooth animations
import iit from '../assets/EducationImg/iit.jpeg'
import fiitjee from '../assets/EducationImg/fiitjee.avif'
import jain from '../assets/EducationImg/jain.avif'
// Education Data
const educationData = [
  {
    institute: "IIT Bhubaneswar",
    degree: "B.Tech in Computer Science",
    duration: "Nov 2020 - May 2024",
    location: "Bhubaneswar, India",
    cgpa: "6.93",
    image: iit
  },
  {
    institute: "Fiitjee Junior College",
    degree: "Board of Intermediate Education",
    duration: "June 2018 - June 2020",
    location: "Andhra Pradesh",
    cgpa: "8.7",
    image: fiitjee
  },
  {
    institute: "Jain EM School",
    degree: "Board of Secondary Education",
    duration: "June 2017 - June 2018",
    location: "Andhra Pradesh",
    cgpa: "9.8",
    image: jain
  },
];

const Education = () => {
  return (
    <>
    
      <div className="mt-10 md:mt-16 px-4 md:px-16">
        {/* Section Header */}
        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wide text-center">
          What I Studied?
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#695aa6] mb-8 text-center"
          style={{ fontFamily: '"Indie Flower", cursive' }}
        >
          My Education
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
            >
              {/* Background Image */}
              <div className="relative h-48">
                <img
                  src={edu.image}
                  alt={edu.institute}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold text-center">
                    {edu.institute}
                  </h3>
                </div> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
  <h3 className="text-white text-lg font-bold text-center">
    {edu.institute}
  </h3>
</div>

              </div>

              {/* Education Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#695aa6]">{edu.degree}</h3>
                <p className="text-gray-600 text-sm mt-2">{edu.duration}</p>
                <p className="text-gray-500 text-xs">{edu.location}</p>
                <p className="text-gray-700 font-semibold mt-3">
                  CGPA: <span className="text-[#483d8b]">{edu.cgpa}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
