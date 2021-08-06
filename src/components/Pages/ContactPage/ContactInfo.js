import React from "react";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Fragment>
      <ul className={classes.infoBody}>
        <li className={classes.rowC}>
          <section> Email Id : </section>
          <a>sanyam1@ucalgary.ca </a>
        </li>

        <li className={classes.rowC}>
          <section> Linked in : </section>
          <a href = "//linkedin.com/in/sanyam-software-engineer">linkedin.com/in/sanyam-software-engineer</a>
        </li>

        <li className={classes.rowC}>
          <section> GitHub : </section>
          <a href = "//github.com/sanyam01">github.com/sanyam01</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default ContactInfo;
