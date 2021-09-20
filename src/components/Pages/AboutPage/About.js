import React, { Fragment } from "react";
import classes from "./About.module.css";
import TechStack from "./TechStack";
import AboutInfo from "./AboutInfo";
import ListCourses from "./ListCourses";

const About = () => {
  return (
    <Fragment>
      <div className={classes.header}> About me</div>
      <AboutInfo />

      <div className={classes.format}>
        <TechStack />
        <ListCourses className = {classes.formatRight}/>
      </div>
    </Fragment>
  );
};

export default About;
