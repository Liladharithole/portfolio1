import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submission started...");

    try {
      const formData = new FormData(e.target);
      // Add _replyto field which Formspree uses to set the reply-to header
      formData.append("_replyto", formData.get("email"));
      // Add _subject field to set the email subject
      formData.append(
        "_subject",
        `New contact from ${formData.get("name")} - ${formData.get("subject")}`
      );
      // Add _format to get a nice email format
      formData.append("_format", "plain");

      const response = await fetch("https://formspree.io/f/meoerpjd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();
      console.log("Form submission result:", result);

      if (response.ok) {
        console.log("Form submitted successfully");
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "bottom-center",
          duration: 5000,
          style: {
            background: isDark ? "#1a1a1a" : "#fff",
            color: isDark ? "#fff" : "#1a1a1a",
            border: `1px solid ${isDark ? "#333" : "#e5e7eb"}`,
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        });
        e.target.reset();
        return;
      }
    } catch (error) {
      console.error("Error in form submission:", {
        error,
        message: error.message,
        name: error.name,
        stack: error.stack,
      });
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
        duration: 5000,
        style: {
          background: isDark ? "#1a1a1a" : "#fff",
          color: isDark ? "#fff" : "#1a1a1a",
          border: `1px solid ${isDark ? "#333" : "#e5e7eb"}`,
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      });
    } finally {
      console.log("Form submission process completed");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 relative`}
      id="contact"
    >
      <Toaster />

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
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 ${
                    isDark
                      ? "bg-gray-900 border-gray-800"
                      : "bg-gray-100 border-gray-200"
                  } border rounded-lg focus:outline-none focus:border-blue-400`}
                  required
                  disabled={isSubmitting}
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
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 ${
                    isDark
                      ? "bg-gray-900 border-gray-800"
                      : "bg-gray-100 border-gray-200"
                  } border rounded-lg focus:outline-none focus:border-blue-400`}
                  required
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FiSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
