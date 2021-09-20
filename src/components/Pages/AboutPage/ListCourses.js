import React from "react";
import classes from "./ListCourses.module.css";

const ListCourses = () => {
  return (
    <div className={classes.subjects}>
      <h3 className={classes.h1}> Relevant courses taken </h3>
      <ul role="list">
        <li> Principles of Software Dev I </li>
        <li> Principles of Software Dev II</li>
        <li> Program Fundamental of Data Engineer</li>
        <li> Machine Learning for Software Engineers</li>
        <li> Engineering Large Scale Data Analytics Systems</li>
        <li> Software Design and Architecture I</li>
        <li> Software Design and Architecture II</li>
        <li> Dependability and Reliability of Software Systems</li>
        <li> Data Mining and Machine Learning</li>
      </ul>
    </div>
  );
};

export default ListCourses;
