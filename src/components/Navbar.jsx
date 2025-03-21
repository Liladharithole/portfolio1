import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const navItems = [
    {
      href: "#home",
      label: "Home",
      icon: <AiOutlineHome className="text-xl" />,
    },
    {
      href: "#about-me",
      label: "About Me",
      icon: <AiOutlineUser className="text-xl" />,
    },
    {
      href: "#skills",
      label: "Skills",
      icon: <BiBookContent className="text-xl" />,
    },
    {
      href: "#services",
      label: "Services",
      icon: <MdMiscellaneousServices className="text-xl" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <AiOutlineProject className="text-xl" />,
    },
    // {
    //   href: "#contact",
    //   label: "Contact",
    //   icon: <RiContactsLine className="text-xl" />,
    // },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b
      ${
        isDark
          ? "bg-black/30 text-white border-gray-800/30"
          : "bg-white/30 text-gray-800 border-gray-200/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Liladhar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun className="text-xl" />
              ) : (
                <FiMoon className="text-xl" />
              )}
            </button>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm xl:text-base group hover:text-blue-400 transition-colors duration-300"
              >
                <span className="transform group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="font-medium tracking-wide">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <button
            onClick={handleContactClick}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm xl:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <RiContactsLine className="text-lg xl:text-xl" />
            <span>Contact Me</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-2 py-3 text-base w-full hover:bg-gray-800/10 rounded-lg transition-colors"
            >
              {isDark ? (
                <>
                  <FiSun className="text-xl" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="text-xl" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-2 py-3 text-base hover:bg-gray-800/50 rounded-lg hover:text-blue-400 transition-all duration-300"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <button
              onClick={handleContactClick}
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4 flex items-center justify-center gap-2"
            >
              <RiContactsLine className="text-xl" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
