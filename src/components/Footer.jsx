import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Liladharithole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/liladhar-ithole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a
              href="https://x.com/Liladharrrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FiTwitter className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center text-gray-400 text-sm sm:text-base">
            <p>
              Made with{" "}
              <FiHeart className="inline text-red-500 mx-1 animate-pulse" /> by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">
                Liladhar Ithole
              </span>
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
