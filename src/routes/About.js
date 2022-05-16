import React from 'react';
import { useLocation } from 'react-router-dom';


function About (){

    let location = useLocation();
    console.log(location);
    return(
        <span>About this page: I built it because I love movies</span>
    )
}




export default About;