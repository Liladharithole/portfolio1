import React from "react";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20`}
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Skills
        </h2>

        <div className="space-y-6 sm:space-y-8 mb-12 md:mb-16 w-full">
          {[
            { name: "HTML & CSS", level: "w-[92%]" },
            { name: "JavaScript", level: "w-[75%]" },
            { name: "Tailwind", level: "w-[85%]" },
            { name: "React", level: "w-[80%]" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full"
            >
              <label
                className={`min-w-[100px] sm:min-w-[120px] text-sm sm:text-base md:text-lg font-semibold ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {skill.name}
              </label>
              <div
                className={`w-full h-3 ${
                  isDark ? "bg-gray-800" : "bg-gray-200"
                } rounded-full`}
              >
                <div
                  className={`${skill.level} h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full 
                    transform transition-all duration-300 hover:scale-y-110 relative`}
                >
                  <span
                    className={`absolute -right-4 -top-6 text-xs ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {skill.level.replace("w-[", "").replace("]", "")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { title: "Experience", value: "2+ Years" },
            { title: "Projects", value: "10+ Completed" },
            { title: "Clients", value: "5+ Happy" },
          ].map((stat) => (
            <div
              key={stat.title}
              className={`${
                isDark ? "bg-gray-900/50" : "bg-white"
              } p-6 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-lg border ${
                isDark ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {stat.value}
              </h3>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mt-2 font-medium`}
              >
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
