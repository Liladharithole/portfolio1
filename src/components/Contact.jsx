import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useForm, ValidationError } from "@formspree/react";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
} from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const { isDark } = useTheme();
  const [state, handleSubmit] = useForm("meoerpjd");
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async (e) => {
    const result = await handleSubmit(e);
    if (result.succeeded) {
      setShowPopup(true);
      e.target.reset(); // Reset form
      setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
    }
  };

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 relative`}
      id="contact"
    >
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down z-50 flex items-center gap-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Message sent successfully!</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* Contact Details */}
              <div className="flex items-center gap-4">
                <FiMail className="text-2xl text-blue-400" />
                <a
                  href="mailto:liladharrrrr@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  liladharrrrr@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="text-2xl text-blue-400" />
                <a
                  href="tel:+917888232205"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 7888232205
                </a>
              </div>

              <div className="flex items-center gap-4">
                <IoLocationOutline className="text-2xl text-blue-400" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Liladharithole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/liladhar-ithole-889073217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://x.com/Liladharrrrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                >
                  <FiTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 ${
                    isDark
                      ? "bg-gray-900 border-gray-800"
                      : "bg-gray-100 border-gray-200"
                  } border rounded-lg focus:outline-none focus:border-blue-400`}
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 ${
                    isDark
                      ? "bg-gray-900 border-gray-800"
                      : "bg-gray-100 border-gray-200"
                  } border rounded-lg focus:outline-none focus:border-blue-400`}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-2 ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-100 border-gray-200"
                } border rounded-lg focus:outline-none focus:border-blue-400`}
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`w-full px-4 py-2 ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-100 border-gray-200"
                } border rounded-lg focus:outline-none focus:border-blue-400`}
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
