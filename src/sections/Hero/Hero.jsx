import React from "react";
import style from "./HeroStyles.module.css";
import heroImg from "../../assets /hero-img.png";
import sun from "../../assets /sun.svg";
import moon from "../../assets /moon.svg";
import twitterLight from "../../assets /twitter-light.svg";
import twitterDark from "../../assets /twitter-Dark.svg";
import linkedinLight from "../../assets /linkedin-light.svg";
import linkedinDark from "../../assets /linkedin-dark.svg";
import githubLight from "../../assets /github-light.svg";
import githubDark from "../../assets /github-dark.svg";
import CV from "../../assets /cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeicon = theme === "light" ? sun : moon;
  const twittericon = theme === "light" ? twitterLight : twitterDark;
  const linkedinicon = theme === "light" ? linkedinLight : linkedinDark;
  const githubicon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img
          className={style.hero}
          src={heroImg}
          alt="profile pic of liladhar"
        />
        <img
          className={style.colorMode}
          src={themeicon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={style.info}>
        <h1>
          Liladhar <br /> Ithole
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="" target="_blank">
            <img src={twittericon} alt="Twitter icon" />
          </a>
          <a href="" target="_blank">
            <img src={linkedinicon} alt="Linkedin icon" />
          </a>
          <a href="" target="_blank">
            <img src={githubicon} alt="Github icon" />
          </a>
        </span>
        <p className={style.description}>
          Passionate frontend developer crafting responsive and intuitive web
          experiences. Specialized in React, JavaScript, and modern web
          technologies. Creating pixel-perfect UI/UX designs with clean and
          maintainable code. Always learning and exploring new ways to build
          better digital solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
