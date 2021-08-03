import React from 'react';
import { Fragment } from 'react';
import Button from '../UI/Button';


const HomePage = () => {

    return <Fragment> 

       <div>
           

        <Button name = 'Home' id  = 'home' />
        <Button name = 'About' id  = 'about' /> 
        <Button name = 'Projects' id = 'projects'/>
        <Button name = 'Contact' id = 'contact'/>   
           
        
        </div> 
    </Fragment>
};

export default HomePage;

