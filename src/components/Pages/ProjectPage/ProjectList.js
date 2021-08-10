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
  const imageSource = [
    { id: 1, srcImage: ReportImage },
    { id: 2, srcImage: CalgaryTraffic },
    { id: 3, srcImage: FaceDetection },
    { id: 4, srcImage: GUIPic },
    { id: 5, srcImage: StockPrediction },
    { id: 6, srcImage: ToolShop },
  ];

  const getImageSource = (props) => {
    const ele = imageSource.find((per) => per.id === props.id);

    return ele.srcImage;
  };

  return (
    <Card className={classes.projects}>
      <div className={classes.containerNew}>
        {props.projects.map((project) => (
          <div className={classes.container}  >
            <div className = {classes.h1}>
              <img
                className={classes.imageSource}
                src={getImageSource(project)}
                alt="Logo"
              />

              <div> {project.title} </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProjectList;
