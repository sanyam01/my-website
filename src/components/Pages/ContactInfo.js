import React from "react";
import { Fragment } from "react";
import classes from './Contact.module.css';
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Fragment>
      <ul className = {classes.infoBody}>
        <li > Email Id : sanyam1@ucalgary.ca </li>

        <li NavLink to = "/linkedin.com/in/sanyam-software-engineer"> Linked in : linkedin.com/in/sanyam-software-engineer</li>

        <li> GitHub : https://github.com/sanyam01</li>
      </ul>
    </Fragment>
  );
};

export default ContactInfo;
