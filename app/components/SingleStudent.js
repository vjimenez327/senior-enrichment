import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

function SingleStudent (props){

    const currentStudentId = Number(props.match.params.studentId);

    const foundStudent = props.students.find(student => student.id === currentStudentId);

    const foundCampus = props.campuses.find(campus => campus.id === foundStudent.campusId);

    console.log('this is the foundCampus', foundCampus)

	const campusId = foundCampus.id;

    return (
        <div>
            <ul>
                <li>First Name:{foundStudent.firstName}</li>
                <li>Last Name:{foundStudent.lastName}</li>
				<li>Email:{foundStudent.email}</li>
                <li>GPA:{foundStudent.gpa}</li>
                <li>Campus:<NavLink to={`/campuses/${campusId}`}> {foundCampus.name} </NavLink></li>
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

export default connect(mapStateToProps)(SingleStudent);


//SO PRETTYYYYYYY OMGGGGGG I LOVE IT
