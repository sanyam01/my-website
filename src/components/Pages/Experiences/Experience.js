import React, { Fragment } from "react";
import classes from "./Experience.module.css";
import Unilex from "../../Images/UnitedLexLogo.png";
import Innovate from "../../Images/Innovate_Calgary_Logo.png";
import Videocon from "../../Images/Videocon_Telocom_Logo.png";

const Experience = () => {
  return (
    <Fragment>
      {" "}
      <div className={classes.header}> Experience</div>
      <div className={classes.containerNew}>
        <div className={classes.container}>
          <div className={classes.containerLogo}>
            {" "}
            <img className={classes.imageSource} src={Innovate} />{" "}
            <h3> May 2021 - Aug 2021</h3>
          </div>
          <div className={classes.body}>
            {" "}
            <h2> Innovate Calgary [CATALYZE Fellow] </h2>
            <p>
              {" "}
              ● Designing and development of website for Children and Youth
              Mental Health Innovation.
              <p>
                {" "}
                ● Exhaustive research of mental health resources before
                designing the product.
              </p>
              <p> ● Launching and testing the product. </p>
            </p>{" "}
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.containerLogo}>
            {" "}
            <img className={classes.imageSource} src={Unilex} />{" "}
            <h3> July 2018 - May 2020</h3>
          </div>
          <div className={classes.body}>
            {" "}
            <h2> UnitedLex [Associate Patent Engineer] </h2>
            <p>
              {" "}
              ● Experience as a technology analyst.
              <p>
                {" "}
                ● Conducted exhaustive research on a variety of topics across
                sources such as company websites, industry reports, market
                studies, and general news article.
              </p>
              <p>
                {" "}
                ● Served as Project owner, worked in collaboration with client
                delivery team, and was responsible for managing and training new
                associates.{" "}
              </p>
            </p>{" "}
            <p>
              {" "}
              ● Firsthand experience with Landscape Analysis, Infringement
              [pertaining to Latest Technologies & Product Testing].
            </p>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.containerLogo}>
            {" "}
            <img className={classes.imageSource} src={Videocon} />{" "}
            <h3> Jan 2017 - Jun 2017</h3>
          </div>
          <div className={classes.body}>
            {" "}
            <h2> Quadrant Televentures [Summer Intern] </h2>
            <p>
              {" "}
              ● Developed a wireless charger using induction coupling.
              <p>
                {" "}
                ● Implementation of the wireless charger on Proteus and Simulink.
              </p>
              <p> ● Product teardown of power banks, Bluetooth speakers, USB cables, and mobile adapters along with circuit analysis. </p>
            </p>{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
