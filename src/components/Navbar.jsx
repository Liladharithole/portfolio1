import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-2 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-3xl font-bold hidden md:inline">Liladhar</div>
        <div className="space-x-6">
          <a href="#home" className=" hover:text-gray-400">
            Home
          </a>
          <a href="#about-me" className=" hover:text-gray-400">
            About Me
          </a>
          <a href="#services" className=" hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className=" hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className=" hover:text-gray-400">
            Contact
          </a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline px-4 py-2 rounded-full transition-transform duration-200 hover:scale-105 px-4 py-2">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
