import React from 'react';
import { Fragment } from 'react';
import classes from './Contact.module.css';
import BasicForm from '../Forms/BasicForm';
import ContactInfo from './ContactInfo';

const Contact = () => {

    return (<Fragment> 
        

        <p className = {classes.header}> Contact me </p> 

        <div className={classes.rowC}>

            <BasicForm />

            <ContactInfo />

         
         
        </div>
        </Fragment>);
};

export default Contact;