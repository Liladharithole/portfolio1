import React from "react";
import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets /viberr.png";
import freshBurger from "../../assets /fresh-burger.png";
import hipsster from "../../assets /hipsster.png";
import fitlift from "../../assets /fitlift.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <>
      <div>
        <section id="projects" className={styles.container}>
          <h1 className={styles.sectionTitle}>Projects</h1>
          <div className={styles.projectContainer}>
            <ProjectCard
              src={viberr}
              link={"https://github.com/Liladharithole?tab=repositories"}
              h3={"Viberr"}
              p={"Streaming App"}
            ></ProjectCard>
            <ProjectCard
              src={freshBurger}
              link={"https://github.com/Liladharithole?tab=repositories"}
              h3={"Fresh-Burger"}
              p={"food Orgering App"}
            ></ProjectCard>
            <ProjectCard
              src={hipsster}
              link={"https://github.com/Liladharithole?tab=repositories"}
              h3={"Viberr"}
              p={"Glasses Shop"}
            ></ProjectCard>
            <ProjectCard
              src={fitlift}
              link={"https://github.com/Liladharithole?tab=repositories"}
              h3={"FitLift"}
              p={"Gym and Fitness App"}
            ></ProjectCard>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
