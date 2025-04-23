import React, { useState } from "react";
import { FaExternalLinkAlt, FaGripLinesVertical } from "react-icons/fa"; // Importing icons

// Experience Data
const experiences = [
  {
    company: "Hunt Jobs PVT LTD",
    position: "Senior Software Engineer - 1",
    duration: "July 2024 – Present",
    website: "https://www.huntsjob.com/",
    projects: [
      {
        name: "HuntsJob",
        description: "A job portal tailored for blue-collar workers.",
        website: "https://www.huntsjob.com/",
        details: [
          "Leading the software development team at Huntsjob.",
          "Oversee cloud cost management as the root user for the AWS account.",
          "Implemented Qr which will redirect users according to user device using python",
          "Designed credit-based system for employers to post jobs.",
          "Improved UI/UX, making the platform more user-friendly.",
          "Contributed to the development of the mobile app for both Android and iOS.",
          "Designed a data management solution for tracking CV distribution, including S3 storage, unique link generation, and database updates to record client downloads, providing client access to company information.",
        ],
      },
      {
        name: "PDOT (Ministry of External Affairs, Govt. of India)",
        description:
          "A system for managing recruitment agency appointments and training.",
        website: "http://pdot.mea.gov.in/",
        details: [
          "Developed backend & frontend in .NET Core MVC.",
          "Created a multi-user system for agencies, training centers, and admins.",
          "Implemented appointment management, training tracking, and certificate generation.",
          "Hosted the application on a physical server at Videsh Bhawan, Mumbai.",
        ],
      },
    ],
  },
  {
    company: "Potters Maps",
    position: "Software Development Intern",
    duration: "May 2023 – July 2023",
    details: [
      "Designed 'Show My Business', a platform for managing online presence.",
      "Allowed users to create/update business details like name, address, phone, and hours.",
      "Used Firebase for data storage and authentication.",
    ],
  },
];

const Experience = () => {
  const [dividerPosition, setDividerPosition] = useState(50);

  const handleMouseMove = (e) => {
    const newPosition = (e.clientX / window.innerWidth) * 100;
    setDividerPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove({ clientX: touch.clientX });
  };

  return (
    <>
      <p
        id="experience"
        className="text-gray-500 text-xs md:text-sm uppercase tracking-wide text-center"
      >
        What I Do ?
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-[#695aa6] mb-4 text-center"
        style={{ fontFamily: '"Indie Flower", cursive' }}
      >
        My Experience
      </h2>

      <div className="relative h-screen w-full bg-gray-950 text-white overflow-hidden">
        {/* Dark Mode (Internship Experience) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-5 md:p-10">
          <h2
            className="text-2xl md:text-4xl font-bold"
            style={{ fontFamily: '"Indie Flower", cursive', color: "#695aa6" }}
          >
            {experiences[1].company}
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-lg">
            {experiences[1].position}
          </p>
          <p className="mt-1 md:mt-2 text-gray-400 text-xs md:text-sm">
            {experiences[1].duration}
          </p>
          <ul className="mt-3 md:mt-4 text-gray-400 text-xs md:text-sm list-disc list-inside">
            {experiences[1].details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        {/* Light Mode (Hunt Jobs Pvt Ltd & Sub-Projects) */}
        <div
          className="absolute inset-0 bg-white text-black shadow-xl "
          style={{
            clipPath: `polygon(0 0, ${dividerPosition}% 0, ${dividerPosition}% 100%, 0% 100%)`,
          }}
        >
          <div className="p-5 md:p-10">
            <h2
              className="text-2xl md:text-4xl font-bold"
              style={{
                fontFamily: '"Indie Flower", cursive',
                color: "#695aa6",
              }}
            >
              {experiences[0].company}
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-lg">
              {experiences[0].position}
            </p>
            <p className="mt-1 md:mt-2 text-gray-600 text-xs md:text-sm">
              {experiences[0].duration}
            </p>

            {/* Loop through Projects */}
            {experiences[0].projects.map((project, index) => (
              <div key={index} className="mt-6 md:mt-8">
                <h3
                  className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2"
                  style={{
                    fontFamily: '"Indie Flower", cursive',
                    color: "#695aa6",
                  }}
                >
                  {project.name}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#695aa6] hover:text-[#483d8b] transition"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  )}
                </h3>
                <p className="mt-1 md:mt-2 text-gray-600 text-xs md:text-sm">
                  {project.description}
                </p>
                <ul className="mt-3 md:mt-4 text-gray-600 text-xs md:text-sm list-disc list-inside">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Draggable Divider with Icon */}
        <div
          className="absolute top-0 h-full w-2 bg-gray-500 cursor-ew-resize flex justify-center items-center"
          style={{ left: `${dividerPosition}%` }}
          onMouseDown={() => {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleMouseMove);
            });
          }}
          onTouchStart={() => {
            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", () => {
              document.removeEventListener("touchmove", handleTouchMove);
            });
          }}
        >
          <FaGripLinesVertical className="text-gray-300 text-lg md:text-xl" />
        </div>
      </div>
    </>
  );
};

export default Experience;
