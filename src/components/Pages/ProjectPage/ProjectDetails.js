import { mergeClasses } from "@material-ui/styles";
import classes from "./ProjectDetails.module.css";
import React from "react";
import Card from "./Card.js";

const ProjectDetails = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <Card className={classes.modal}>
        <header className={classes.header}> <h2>{props.title} </h2></header>
        <div className={classes.content}>
          <p>{props.details}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetails;
