import React from "react";
import classes from "./TechStack.module.css";

const TechStack = () => {
  return (
    <div className={classes.stack}>
      <h2 className={classes.topRow}> My Tech Stack</h2>
      <div className={classes.bottomRow}>
        <div>
          {" "}
          <h4>Skillset</h4>
          <ul className={classes.body}>
            <li> HTML</li>
            <li> CSS</li>
            <li> JavaScript</li>
            <li> React</li>
            <li> Python</li>
            <li> Java</li>
            <li> SQL</li>
          </ul>
        </div>
        <div>
          {" "}
          <h4> Learning </h4>
          <ul className={classes.body}>
            <li> Node.js</li>
            <li> Operating System</li>
          </ul>
        </div>
        <div>
          {" "}
          <h4> To Do</h4>{" "}
          <ul className={classes.body}>
            <li> GraphQL</li>
            <li> Django</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
