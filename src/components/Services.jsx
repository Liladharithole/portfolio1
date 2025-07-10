import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaDesktop,
  FaMobile,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaNodeJs,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BiCodeAlt, BiServer } from "react-icons/bi";
import { MdOutlineDesignServices, MdApi } from "react-icons/md";
import { SiExpress, SiMongodb } from "react-icons/si";
import { AiOutlineCloudServer, AiOutlineDeploymentUnit } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";

const Services = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      icon: <BiCodeAlt className="text-4xl text-purple-400" />,
      title: "Frontend Development",
      description:
        "Building interactive and responsive user interfaces using React, Next.js, and modern JavaScript.",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      title: "Backend Development",
      description:
        "Developing robust server-side applications with Node.js, Express, and other backend technologies.",
    },
    {
      icon: <SiExpress className="text-4xl text-gray-400" />,
      title: "API Development",
      description:
        "Creating RESTful and GraphQL APIs for seamless frontend-backend communication.",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600" />,
      title: "Database Management",
      description:
        "Implementing NoSQL database solutions with MongoDB for flexible and scalable data management.",
    },
    {
      icon: <FaCode className="text-4xl text-blue-400" />,
      title: "Web Development",
      description:
        "Creating responsive and dynamic websites using modern technologies like React and Tailwind CSS.",
    },
    {
      icon: <MdOutlineDesignServices className="text-4xl text-green-400" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and user-friendly interfaces that enhance user experience and engagement.",
    },
    {
      icon: <FaMobile className="text-4xl text-yellow-400" />,
      title: "Responsive Design",
      description:
        "Building websites that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <AiOutlineCloudServer className="text-4xl text-blue-500" />,
      title: "Cloud Services",
      description:
        "Leveraging cloud platforms for scalable and reliable application deployment.",
    },
  ];

  const visibleServices =
    isMobile && !showAll ? services.slice(0, 4) : services;
  const showShowMore = isMobile && services.length > 6 && !showAll;
  const showShowLess = isMobile && showAll;

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20`}
      id="services"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className={`${
                isDark
                  ? "bg-gray-900/50 border-gray-800"
                  : "bg-gray-100 border-gray-200"
              } p-6 rounded-xl border transform transition-all duration-300 hover:scale-105 hover:shadow-xl group hover:border-blue-500/50`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } text-sm sm:text-base`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {(showShowMore || showShowLess) && (
          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-end justify-center">
              <div
                className={`w-full h-32 bg-gradient-to-t ${
                  isDark
                    ? "from-black to-transparent"
                    : "from-white to-transparent"
                }`}
              ></div>
            </div>
            <div className="relative flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    : "bg-black/5 hover:bg-black/10 text-gray-800 border border-black/10"
                } transition-all duration-300 backdrop-blur-md`}
              >
                <span>{showAll ? "Show Less" : "Show More"}</span>
                {showAll ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
