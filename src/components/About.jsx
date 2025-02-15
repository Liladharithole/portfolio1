import React from "react";
import liladhar from "../assets/liladhar-circular.png";

const About = () => {
  return (
    <div
      className="bg-black text-white px-8 py-16 md:px-16 lg:px-24"
      id="about-me"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-12">
          <img
            src={liladhar}
            alt=""
            className="hidden md:hidden lg:block mr-8 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex flex-col space-y-8">
            <p className="text-gray-400 text-[18px] leading-8 mb-8">
              Hi, I'm LILADHAR, a computer science graduate with a strong
              passion for web development, technology. I have hands-on
              experience with HTML, CSS, JavaScript, Tailwind, React.js, and UX
              design, I have developed strong problem-solving and analytical
              skills. I am passionate about building user-friendly applications
              that solve real-world problems and enhance the user experience.
              Despite challenges, I am determined, hardworking, and eager to
              explore opportunities that align with my skills and interests. My
              ultimate goal is to build a successful career in technology and
              leveraging my knowledge to make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
