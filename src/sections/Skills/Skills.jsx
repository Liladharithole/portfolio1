import React from "react";
import style from "./SkillsStyle.module.css";
import checkMarkIcon from "../../assets /checkmark-light.svg";
import SkillList from "../../common/SkillList";

const Skills = () => {
  return (
    <section id="skills" className={style.container}>
      <h1 className={style.sectionTitle}>Skills</h1>
      <div className={style.skillsList}>
        <SkillList src={checkMarkIcon} skill="HTML"></SkillList>
        <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="TypeScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="Tailwind-CSS"></SkillList>
      </div>
      <hr className={style.hr} />
      <div className={style.skillsList}>
        <SkillList src={checkMarkIcon} skill="Node"></SkillList>
        <SkillList src={checkMarkIcon} skill="ReactJs"></SkillList>
        <SkillList src={checkMarkIcon} skill="ThreeJs"></SkillList>
        <SkillList src={checkMarkIcon} skill="angularJs"></SkillList>
      </div>
      <hr />
      <div className={style.skillsList}>
        <SkillList src={checkMarkIcon} skill="Git"></SkillList>
        <SkillList src={checkMarkIcon} skill="Docker"></SkillList>
        <SkillList src={checkMarkIcon} skill="Github"></SkillList>
      </div>
    </section>
  );
};

export default Skills;
  