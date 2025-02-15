import React from "react";
import { FaCode, FaDesktop, FaMobile, FaPaintBrush } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Services = () => {
  const { isDark } = useTheme();

  const services = [
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
      icon: <BiCodeAlt className="text-4xl text-purple-400" />,
      title: "Frontend Development",
      description:
        "Developing clean, efficient, and maintainable frontend code using modern JavaScript frameworks.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-400" />,
      title: "Web Design",
      description:
        "Creating visually appealing and modern website designs that capture your brand's essence.",
    },
    {
      icon: <FaDesktop className="text-4xl text-red-400" />,
      title: "Web Applications",
      description:
        "Building custom web applications tailored to your specific business needs and requirements.",
    },
  ];

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
          {services.map((service, index) => (
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
      </div>
    </div>
  );
};

export default Services;
