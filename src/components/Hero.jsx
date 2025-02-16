import React from "react";
import liladhar from "../assets/liladhar-circular.png";
import { FiDownload, FiSend } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import  resume  from "../data/Liladhar Ithole .pdf";

const Hero = () => {
  const { isDark } = useTheme();

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Liladhar_Ithole_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConnectClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16`}
      id="home"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-32 sm:w-40 md:w-52 rounded-full object-cover shadow-xl 
                     transform transition-transform duration-300 hover:scale-105 
                     border-2 border-blue-400"
            src={liladhar}
            alt="Liladhar"
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 mb-4">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 animate-gradient">
              Liladhar Ithole
            </span>{" "}
            <span className="block mt-2">Front-End Developer</span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl text-center ${
              isDark ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto px-4`}
          >
            I am a Front-End Developer with experience in building responsive
            websites using HTML, CSS, JavaScript, Tailwind, React.js, and UX
            design.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
            <button
              onClick={handleConnectClick}
              className="group bg-gradient-to-r from-green-400 to-blue-500 text-white 
                       rounded-full px-6 py-3 sm:px-8 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg 
                       text-sm sm:text-base font-medium
                       flex items-center justify-center gap-2 
                       hover:from-blue-500 hover:to-green-400"
            >
              Connect with Me
              <FiSend className="inline-block transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-red-400 to-yellow-500 text-white 
                       rounded-full px-6 py-3 sm:px-8
                       transition-all duration-300 hover:scale-105 hover:shadow-lg
                       text-sm sm:text-base font-medium
                       flex items-center justify-center gap-2
                       hover:from-yellow-500 hover:to-red-400"
            >
              Resume
              <FiDownload className="inline-block transform group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
