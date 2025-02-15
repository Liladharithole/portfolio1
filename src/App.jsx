import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Services /> */}
      <Project />
    </>
  );
};

export default App;
