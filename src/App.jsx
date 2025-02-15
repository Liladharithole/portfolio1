import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Project />
        <Contact />
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default App;
