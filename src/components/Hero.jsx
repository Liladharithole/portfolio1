import React from "react";
import liladhar from "../assets/liladhar-circular.png";

const Hero = () => {
  return (
    <div className="bg-black text-white px-8 py-16 md:px-16 lg:px-24">
      <img
        className="mx-auto mb-8 w-52 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        src={liladhar}
        alt="Liladhar"
      />
      <h1 className="text-4xl font-bold text-center mb-4">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to to-blue-400">
          Liladhar Ithole{" "}
        </span>
        {""}
        Front-End Developer
      </h1>
      <p className="text-[18px] text-center text-gray-400 ">
        I am a Front-End Developer. I have experience in building responsive
        websites using HTML, CSS, and JavaScript,Tailwind, React.js, and UX
        design.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline rounded-full transition-transform duration-200 hover:scale-105 px-4 py-2">
          Conect with Me
        </button>
        <button className="bg-gradient-to-r from-red-400 to to-yellow-500 text-white hidden md:inline rounded-full transition-transform duration-200 hover:scale-105 px-4 py-2">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
