import React from "react";
import logo from "../../Images/myPic.JPG";
import { Fragment } from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.rowC}>
        <div className={classes["columnC:left"]}>
          <div className={classes.rowc}>
            <p className={classes.body}> Hey! Welcome to my website.</p>
            <p className={classes.bodyText}>
              {" "}
              I am Sanyam. I am currently pursuing master's at University of
              Calgary in Electrical and Computer Engineering, with my course
              work focused on software engineering. I am an aspiring software
              engineer and looking for full time opportunities from January 2022.
            </p>
          </div>
        </div>
        <img className={classes["columnC:righ"]} src={logo} alt="Logo" />
      </div>
    </Fragment>
  );
};

export default Home;
