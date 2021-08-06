import React from "react";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
import BasicForm from "../../Forms/BasicForm";

const Contact = () => {
  return (
    <Fragment>
      <p className={classes.header}> Contact me </p>
      <div className={classes.rowC}>
        <BasicForm />

        <ContactInfo />
      </div>
      

    </Fragment>
  );
};

export default Contact;
