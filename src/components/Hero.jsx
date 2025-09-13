import React from "react";
import liladhar from "../assets/liladhar-circular.png";
import { FiDownload, FiSend } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import resume from "../data/Liladhar Ithole - 2025.pdf";
import StarsBackground from "./StarsBackground";

const Hero = () => {
  const { isDark } = useTheme();
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });

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
        isDark ? "text-white" : "text-gray-900"
      } min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 relative`}
      id="home"
      style={{
        background: isDark ? "transparent" : "#ffffff",
        zIndex: 10,
        position: "relative",
      }}
    >
      {isDark && (
        <div className="absolute inset-0 -z-10">
          <StarsBackground />
        </div>
      )}
      <div className="max-w-4xl mx-auto w-full relative z-20">
        <div className="flex flex-col items-center">
          {/* <img
            className="w-32 sm:w-40 md:w-52 rounded-full object-cover shadow-xl 
                     transform transition-transform duration-300 hover:scale-105 
                     border-2 border-blue-400"
            src={liladhar}
            alt="Liladhar"
          /> */}

          <div 
            ref={heroRef}
            className={`text-center mt-8 mb-4 transition-all duration-700 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              <div className="mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-gradient">
                  Hi there
                </span>
                <span className="inline-block animate-waving-hand ml-2">👋🏽</span>
              </div>
              <div className="mb-4">
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl">I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                  Liladhar Ithole
                </span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-primary font-medium mt-4">
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Full Stack Developer
                </span>
              </div>
            </h1>
          </div>

          <p
            className={`text-base sm:text-lg text-center transition-all duration-1000 delay-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            } ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'} max-w-2xl mx-auto px-4`}
          >
            I am a Full Stack Developer with expertise in building responsive
            and dynamic web applications using React.js, Node.js, Express.js and
            MongoDB.
          </p>

          <div className={`mt-6 sm:mt-8 flex flex-row gap-3 sm:gap-4 md:gap-6 w-full justify-center items-center transition-all duration-1000 delay-300 ${
            heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleConnectClick}
              className="group bg-gradient-to-r from-green-400 to-blue-500 text-white 
                       rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-4 btn-smooth
                       text-xs sm:text-sm md:text-base font-heading font-medium
                       flex items-center justify-center gap-1 sm:gap-2 
                       hover:from-blue-500 hover:to-green-400 shadow-lg hover:shadow-xl"
            >
              <span className="hidden sm:inline">Let's </span>Connect
              <FiSend className="icon-bounce text-xs sm:text-sm" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                       rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-4 btn-smooth
                       text-xs sm:text-sm md:text-base font-heading font-medium
                       flex items-center justify-center gap-1 sm:gap-2
                       hover:from-pink-500 hover:to-purple-500 shadow-lg hover:shadow-xl"
            >
              Resume
              <FiDownload className="icon-bounce text-xs sm:text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
