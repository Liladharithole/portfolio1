import React from "react";
import { projects } from "../data/ProjectsData.js";

const Project = () => {
  return (
    <div
      className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-800"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs sm:text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
