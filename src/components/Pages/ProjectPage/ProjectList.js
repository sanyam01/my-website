import classes from "./ProjectList.module.css";
import React, { Fragment } from "react";
import Card from "./Card";
import ReportImage from "../../Images/ClassificationReport.jpg";
import CalgaryTraffic from "../../Images/calgaryTraffic.jpeg";
import FaceDetection from "../../Images/FaceDetection.jpeg";
import GUIPic from "../../Images/GUIPic.png";
import StockPrediction from "../../Images/stockPrediction.png";
import ToolShop from "../../Images/ToolShop.jpeg";

const ProjectList = (props) => {

  const testClickFunction = (event) => {
    console.log(event.key);
  } ;

  const imageSource = [
    { id: 1, srcImage: ToolShop },
    { id: 2, srcImage: ReportImage },
    { id: 3, srcImage: StockPrediction },
    { id: 4, srcImage: FaceDetection },
    { id: 5, srcImage: CalgaryTraffic },
    { id: 6, srcImage: GUIPic },
  ];

  const getImageSource = (props) => {
    const ele = imageSource.find((per) => per.id === props.id);

    return ele.srcImage;
  };

  return (
    <Card className={classes.projects}>
      <div className={classes.containerNew}>
        {props.projects.map((project) => (
          <div
            className={classes.container}
            key={project.id}
           
          >
            <div className={classes.h1} >
              <img
                className={classes.imageSource}
                src={getImageSource(project)}
                alt="Logo"
                key = {project.id}
                onClick = {testClickFunction }
              />

              <div className = {classes.body}> {project.title} </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProjectList;
