import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import portfolio from '../assets/portfolio.png';
import music from '../assets/music.png';
import scheduling from '../assets/scheduling.jpg';
import verifying from '../assets/verifying.jpg';
import promotion from '../assets/promotion.jpg';
import content from '../assets/content.jpg';
import booking from '../assets/booking.jpg';

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and TailwindCSS.",
    img: portfolio, // replace with your project image
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["React", "TailwindCSS"]
    // "EmailJS"
  },
  {
    title: "Spotify Clone App",
    description: "A full-stack spotify clone website built with MEAN stack.",
    img: music,
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["MongoDB", "Express", "Angular", "Node.js", "git", "gitlab"]
  },
  {
    title: "Post Pacth Verification",
    description: "Automates the monitoring of servers and workstations by checking patch status, uptime, and overall system health.",
    img: verifying,
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["Powerhell"]
  },
  {
    title: "Content Management System",
    description: "Internal system for dynamic article creation, publishing, and management.",
    img: content,
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["MongoDB", "Express", "Angular", "Node.js", "git", "gitlab"]
  },
  {
    title: "Scheduling System",
    description: "A room scheduling tool designed to streamline instructor reservations.",
    img: booking,
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["MongoDB", "Express", "Angular", "Node.js", "git", "github"]
  },
  {
    title: "Promotion System",
    description: "A promotion system built with MEAN stack and visualized large data sets with dashboard insights and AI-based interpretation for smarter decision-making.",
    img: promotion,
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["MongoDB", "Express", "Angular", "Node.js", "AI", "git", "gitlab"]
  },
  {
    title: "Booking System",
    description: "A tutor booking system for college students to schedule academic sessions easily.",
    img: scheduling,
    github: "https://github.com/",
    demo: "https://yourliveproject.com",
    tech: ["HTML", "CSS", "PHP", "MySQL"]
  }
];

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-[#464F51] via-[#000009] to-[#464F51] text-white py-16 px-6"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0FF4C6] mb-12">
          My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#000009]/90 rounded-xl shadow-lg overflow-hidden border border-transparent hover:border-[#0FF4C6] hover:shadow-[0_0_20px_#0FF4C6] transform hover:-translate-y-2 transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[280px]">
                <div>
                  <h3 className="text-2xl font-semibold text-[#DEFFF2]">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-[#0FF4C6]/20 text-[#0FF4C6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0FF4C6] text-black rounded-md font-semibold hover:bg-[#DEFFF2] cursor-pointer transition"
                  >
                    <FaGithub /> Code
                  </button>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0FF4C6] text-black rounded-md font-semibold hover:bg-[#DEFFF2] cursor-pointer transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}


export default Projects;
