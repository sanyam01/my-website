import React, {useCallback} from "react";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
import BasicForm from "../../Forms/BasicForm";

const Contact = () => {

  const addMessageHandler = useCallback(async (message) => {
    console.log("I am here");

    const response = await fetch('https://mywebsite-96700-default-rtdb.firebaseio.com/messages.json', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);

  });

  return (
    <Fragment>
      <p className={classes.header}> Contact me </p>
      <div className={classes.rowC}>
        <BasicForm onAddMessage={addMessageHandler} />

        <ContactInfo />
      </div>
    </Fragment>
  );
};

export default Contact;
