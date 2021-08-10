import React from "react";
import { Fragment } from "react";
import classes from "./Education.module.css";
import PecLogo from "../../Images/PecLogo.png";
import PsebLogo from "../../Images/PsebLogo.jpg";
import UoCLogo from "../../Images/UoCLogo.png";

const Education = () => {
  return (
    <Fragment>
      <div className={classes.header}> Educational background </div>
      <div className={classes.container}>
        <div className={classes.child}>
          <img src={PsebLogo} alt="Logo" />{" "}
          <p className={classes.headText}> Punjab School Education Board </p>
          <p className={classes.infoBody}> Class 12 </p>
          <p> 92.67% [2012-2013]</p>
        </div>
        <div className={classes.child}>
          <img src={PecLogo} alt="Logo" />{" "}
          <p className={classes.headText}>
            {" "}
            Punjab Engineering College (Deemed to be University){" "}
          </p>
          <p className={classes.infoBody}>
            {" "}
            Bachelor of Technology in Electronics and Communication Engineering{" "}
          </p>
          <p> 7.96/10 CGPA [2014-2018]</p>
        </div>

        <div className={classes.child}>
          <img src={UoCLogo} alt="Logo" />{" "}
          <p className={classes.headText}> University of Calgary </p>
          <p className={classes.infoBody}>
            {" "}
            Master of Engineering in Electrical and Computer Engineering{" "}
          </p>
          <p> 4.0/4.0 GPA [2020-2022]</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
