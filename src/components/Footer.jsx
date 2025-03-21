import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin,FaFreeCodeCamp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="relative bg-[#0b132b] text-white pt-16 pb-6 text-center">
      {/* Wavy Background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#0b132b] clip-wave"></div>

      {/* Name */}
      <h2 className="text-4xl font-bold text-[#695aa6] mb-4" style={{ fontFamily: '"Indie Flower", cursive' }}>
      Arjun Kanth
        </h2>

      {/* Navigation Links */}
      <ul className="flex justify-center gap-6 md:gap-10 mt-2 text-white text-sm md:text-base relative z-10">
        {["About", "Skills", "Experience", "Projects", "Education"].map((item, index) => (
          <li key={index} className="hover:text-purple-400 transition">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Divider Line with Infinity Symbol */}
      <div className="relative flex items-center justify-center mt-8">
        <div className="w-1/3 h-[1px] bg-gray-500"></div>
        <span className="text-purple-400 mx-2 text-xl">∞</span>
        <div className="w-1/3 h-[1px] bg-gray-500"></div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-6 text-gray-400 text-2xl relative z-10">
        
             <a href="https://www.linkedin.com/in/arjun-kanth-venkatagiri-7aba47241/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/20cs01065/" target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks size={30} color="#008000" />
            </a>
            <a href="https://github.com/arjunv2003" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30}  />
            </a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-gray-500 text-xs relative z-10">
        © {new Date().getFullYear()} Arjun Kanth. All rights reserved.
      </div>

      {/* Clip Path for Wavy Effect */}
      <style>
        {`
          .clip-wave {
            clip-path: polygon(0 90%, 100% 80%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
