import React from "react";
import myImg from "../assets/myImg.png"
import myResume from "../assets/Resume/Arjun_SWE.pdf"
const About = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 sm:px-10 py-16 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="lg:w-1/3 w-full flex justify-center">
        <img
          src={myImg}
          alt="Profile"
          className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-[320px] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 w-full lg:pl-12 text-center lg:text-left mt-6 lg:mt-0">
        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Who Am I ?
        </p>
        <h2 className="text-4xl font-bold text-[#695aa6] mb-4" style={{ fontFamily: '"Indie Flower", cursive' }}>
          About Me
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Repudiandae
          aliquid ad provident aut fuga animi soluta quae eos non cupiditate
          voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo
          a iste culpa! Quasi quibusdam hic recusandae delectus velit officiis
          explicabo voluptatibus! Nemo esse similique, voluptates labore
          distinctio, placeat explicabo facilis molestias.
        </p>
        <a href={myResume} download="Arjun_Resume.pdf">
  <button className="px-6 py-2 border-2 border-[#695aa6] text-[#695aa6] rounded-lg hover:bg-[#695aa6] hover:text-white transition duration-300">
    Download CV
  </button>
</a>

      </div>
    </div>
  );
};


export default About;
