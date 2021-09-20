import React, { Fragment } from "react";
import classes from "./Project.module.css";
import ProjectList from "./ProjectList";


const Projects = () => {

  

  const listProjects = [
    {
      id: 1,
      title: "Distributed Inventory Management System",
    },
    {
      id: 2,
      title: "Automated Classification of Software Issue Reports",
    },
    { id: 3, title: "Stock Prediction using Long-Short Term Memory" },
    { id: 4, title: "Face Detection using Siamese Model" },
    { id: 5, title: "Data Analysis of Calgary City Traffic" },
    { id: 6, title: "Graphical User Interface (GUI) in Python" },
  ];

  return (
    <Fragment>
      <div className={classes.header}> Projects</div>
      <ProjectList projects={listProjects} />
    </Fragment>
  );
};

export default Projects;
