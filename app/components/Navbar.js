import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

export default function Navbar (props) { 
    
    return (
        <navbar>
           
             <center>
                <h1><NavLink to='/campuses'> Campuses </NavLink></h1>
               

                
                <h1><NavLink to='/students'> Students </NavLink></h1>

               
                </center>

        </navbar>
    )
}
