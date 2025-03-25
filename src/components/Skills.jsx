import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const { isDark } = useTheme();

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 size={40} className="text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt size={40} className="text-[#1572B6]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript size={40} className="text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={40} className="text-[#1e71f7]" />,
        },
        {
          name: "React",
          icon: <FaReact size={40} className="text-[#61DAFB]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />,
        },
        // {
        //   name: "Bootstrap",
        //   icon: <FaBootstrap size={40} className="text-[#7952B3]" />,
        // },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={40} className="text-[#339933]" />,
        },
        { name: "Express", icon: <SiExpress size={40} /> },
        {
          name: "MongoDB",
          icon: <SiMongodb size={40} className="text-[#47A248]" />,
        },
        {
          name: "Database",
          icon: <FaDatabase size={40} className="text-blue-400" />,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt size={40} className="text-[#F05032]" />,
        },
        { name: "GitHub", icon: <FaGithub size={40} /> },
      ],
    },
  ];

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

        {/* MERN Stack Highlight */}
        <div
          className={`mb-12 p-6 rounded-xl ${
            isDark
              ? "bg-gray-900/50 border border-gray-800"
              : "bg-white border border-gray-200"
          } text-center shadow-md`}
        >
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Full Stack MERN Developer
          </h3>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <SiMongodb size={40} className="text-[#47A248]" />
              <span className="mt-2 text-sm">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress size={40} />
              <span className="mt-2 text-sm">Express</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact size={40} className="text-[#61DAFB]" />
              <span className="mt-2 text-sm">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} className="text-[#339933]" />
              <span className="mt-2 text-sm">Node.js</span>
            </div>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="space-y-10">
          {skillGroups.map((group, index) => (
            <div key={index} className="mb-8">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {group.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`${
                      isDark ? "bg-gray-900/50" : "bg-white"
                    } flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border ${
                      isDark ? "border-gray-800" : "border-gray-200"
                    }`}
                  >
                    <div className="mb-3">{skill.icon}</div>
                    <p
                      className={`text-center ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } font-medium`}
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-16">
          {[
            // { title: "Experience", value: "2+ Years" },
            // { title: "Projects", value: "10+ Completed" },
            // { title: "Clients", value: "5+ Happy" },
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
