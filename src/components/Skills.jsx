import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-black text-white min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          Skills
        </h2>

        <div className="space-y-6 sm:space-y-8 mb-12 md:mb-16 w-full">
          {/* Skill bars */}
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
              <label className="min-w-[100px] sm:min-w-[120px] text-sm sm:text-base md:text-lg font-semibold text-gray-300">
                {skill.name}
              </label>
              <div className="w-full h-3 bg-gray-800 rounded-full">
                <div
                  className={`${skill.level} bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full 
                    transform transition-all duration-300 hover:scale-y-110`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { title: "Experience", value: "2+ Years" },
            { title: "Projects", value: "10+ Completed" },
            { title: "Clients", value: "5+ Happy" },
          ].map((stat) => (
            <div
              key={stat.title}
              className="bg-gray-900/50 p-4 sm:p-6 rounded-xl transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
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
