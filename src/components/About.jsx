import React from "react";
import liladhar from "../assets/liladhar-circular.png";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20`}
      id="about-me"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3">
            <img
              src={liladhar}
              alt="Liladhar Profile"
              className="w-48 sm:w-56 md:w-64 lg:w-full max-w-sm mx-auto rounded-lg shadow-xl 
                       transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <p
              className={`text-base sm:text-lg md:text-xl ${
                isDark ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              Hi, I'm{" "}
              <span
                className={`${
                  isDark ? "text-white" : "text-gray-900"
                } font-semibold`}
              >
                LILADHAR
              </span>
              , a passionate Full Stack Developer specializing in the MERN stack
              (MongoDB, Express.js, React.js, Node.js). With a strong foundation
              in computer science, I create dynamic, responsive, and
              user-friendly web applications that deliver exceptional user
              experiences.
            </p>

            <p
              className={`mt-4 text-base sm:text-lg md:text-xl ${
                isDark ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              My frontend expertise includes HTML, CSS, JavaScript, React.js,
              and, while my backend skills encompass Node.js, Express.js,
              MongoDB, and RESTful API development. I'm proficient in building
              complete web solutions from database design to responsive UI
              implementation.
            </p>

            <p
              className={`mt-4 text-base sm:text-lg md:text-xl ${
                isDark ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              I approach each project with determination and analytical
              thinking, and I'm constantly learning new technologies to enhance
              my skills. My goal is to leverage my full stack expertise to build
              innovative solutions that solve real-world problems and make a
              meaningful impact in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
