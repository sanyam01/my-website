import React, { Fragment } from "react";
import classes from "./Fun.module.css";
import BhangraPic from "../../Images/BhangraPic.jpg";

const Fun = () => {
  return (
    <Fragment>
      <div className={classes.header}> Fun facts and Achievements </div>
      <div className={classes.container}>
        {" "}
        <div className={classes.child}>
         
            <img src={BhangraPic} alt="Logo" />
            <p className={classes.headText}> Folk Dance Competition </p>
         
        </div>{" "}
        <div className={classes.child}> Second</div>{" "}
        <div className={classes.child}> Third</div>{" "}
        <div className={classes.child}> Fourth</div>{" "}
        <div className={classes.child}> Fifth</div>{" "}
        <div className={classes.child}> Six</div>{" "}
      </div>
    </Fragment>
  );
};

export default Fun;
