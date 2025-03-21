import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b132b] text-white pt-16 pb-6 text-center">
      {/* Wavy Background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[#0b132b] clip-wave"></div>

      {/* Name */}
      <h2 className="text-lg md:text-2xl font-bold text-purple-400 relative z-10">
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
        <a href="https://facebook.com" className="hover:text-purple-400 transition"><FaFacebook /></a>
        <a href="https://instagram.com" className="hover:text-purple-400 transition"><FaInstagram /></a>
        <a href="https://linkedin.com" className="hover:text-purple-400 transition"><FaLinkedin /></a>
        <a href="https://twitter.com" className="hover:text-purple-400 transition"><FaXTwitter /></a>
        <a href="https://youtube.com" className="hover:text-purple-400 transition"><FaYoutube /></a>
        <a href="https://whatsapp.com" className="hover:text-purple-400 transition"><FaWhatsapp /></a>
        <a href="https://telegram.org" className="hover:text-purple-400 transition"><FaTelegram /></a>
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
