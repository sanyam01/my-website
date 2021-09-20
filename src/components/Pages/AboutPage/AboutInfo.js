import React from "react";
import classes from "./AboutInfo.module.css";

const AboutInfo = () => {
  return (
    <div className={classes.about}>
      <ul>
        <li> Second year master's student at University of Calgary.</li>
        <li>
          {" "}
          Pursuing Electrical and Computer Engineering with focus on software
          engineering.
        </li>
        <li> Recent interest - Front-end web development.</li>
        <li> Verstile persona with multitasking capabilities.</li>
        <li> Extrovert personality and love making new friends.</li>
      </ul>
      <ul>
      <li> Love playing badminton and tennis.</li>
        <li> Aspire to be a full-stack developer.</li>
        <li>
          {" "}
          Seeking part-time software development role for fall 2021 and winter
          2022.
        </li>
        <li> Expected graduation date - May 2022.</li>
        <li> Seeking full-time software development role from June 2022.</li>
      </ul>
    </div>
  );
};

export default AboutInfo;
