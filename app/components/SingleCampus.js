import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


function  SingleCampus (props){

    const currentCampusId = Number(props.match.params.campusId); 

    const foundCampus = props.campuses.find(campus => campus.id === currentCampusId);

    const foundStudents = props.students.filter(student => student.campusId === currentCampusId);

    return (
        
        <div>
            <ul>
                <li>Campus Name: {foundCampus.name}</li>
                <img src={foundCampus.imageUrl} />
                <li>Description:{foundCampus.description}</li>

                <li> Students: </li>{foundStudents.map(student => <span className="listedStudents" key={student.id}><NavLink to ={`/students/${student.id}`}> {student.fullName} </NavLink></span>)}

            </ul>
        </div>

    );
    
}
    
const mapStateToProps = (storeState) => {
    return {
        students: storeState.students,
        campuses: storeState.campuses
    };
};
const singleCampusContainer = connect(mapStateToProps)(SingleCampus);

export default singleCampusContainer;   
