import React, { useState, useEffect, useRef } from "react";
import { projects } from "../data/ProjectsData.js";
import { useTheme } from "../context/ThemeContext";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";
import OptimizedImage from "./OptimizedImage";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const Project = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible, getItemDelay] = useStaggeredAnimation(projects.length, 150);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects =
    isMobile && !showAll ? projects.slice(0, 3) : projects;

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen py-12 sm:py-16 md:py-20`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 
          ref={titleRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 lg:mb-16 transition-smooth
            ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          Projects
        </h2>

        {/* Mobile: Vertical List */}
        <div ref={projectsRef} className="md:hidden space-y-6 px-2">
          {visibleProjects.map((project, index) => (
            <div key={project.id} className="w-full px-2 cursor-pointer">
              <ProjectCard
                project={project}
                isDark={isDark}
                index={index}
                className="w-full max-w-md mx-auto min-h-[420px] sm:min-h-[450px] cursor-pointer"
              />
            </div>
          ))}
          {isMobile && projects.length > 3 && (
            <div className="px-2 mt-4 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className={`px-6 py-3 rounded-full flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    : "bg-black/5 hover:bg-black/10 text-gray-800 border border-black/10"
                } transition-all duration-300 backdrop-blur-md`}
              >
                <span className="font-medium">
                  {showAll ? "Show Less" : "Show More"}
                </span>
                {showAll ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Desktop/Tablet: Horizontal Scroll */}
        <div className="hidden md:block relative">
          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  : "bg-black/5 hover:bg-black/10 text-gray-800 border border-black/10"
              } transition-all duration-300 shadow-lg`}
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              <div className="flex space-x-6 min-w-max w-full px-2">
                {projects.map((project, index) => (
                  <div key={project.id} className="w-80 flex-shrink-0">
                    <ProjectCard
                      project={project}
                      isDark={isDark}
                      index={index}
                      className="h-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  : "bg-black/5 hover:bg-black/10 text-gray-800 border border-black/10"
              } transition-all duration-300 shadow-lg`}
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted Project Card Component
const ProjectCard = ({ project, isDark, className = "", index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div
      ref={cardRef}
      className={`${
        isDark ? "bg-gray-900 border-gray-800" : "bg-gray-100 border-gray-200"
      } rounded-xl overflow-hidden card-smooth border ${className}
        ${cardVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative group">
        <OptimizedImage
          src={project.image}
          alt={project.name}
          className="w-full h-48 sm:h-56 md:h-60"
          placeholder={<div className="loading-shimmer w-full h-full" />}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
          <div className="flex flex-wrap justify-center gap-3 w-full px-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-4 py-2.5 rounded-lg btn-smooth text-sm sm:text-base whitespace-nowrap flex-1 text-center font-medium"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-700 text-white px-4 py-2.5 rounded-lg btn-smooth text-sm sm:text-base whitespace-nowrap flex-1 text-center font-medium"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3
          className={`text-lg sm:text-xl font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`${
            isDark ? "text-gray-300" : "text-gray-600"
          } text-sm sm:text-base mb-4 line-clamp-3`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`text-xs ${
                isDark
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-200 text-gray-700"
              } px-2.5 py-1 rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
