import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {updateStudent} from '../reducers/';
import { connect } from 'react-redux';



function EditStudent (props) {

    const {handleSubmit,  studentFirstName, studentLastName, studentEmail, studentGPA, campuses, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleGPAChange, students} = props;
    
    
    const currentStudentId = Number(props.match.params.studentId);

	const foundStudent = students && students.find(student => student.id === currentStudentId);

    
	const foundCampus = campuses.find(campus => campus.id === foundStudent.campusId);
	
   
		return (
			<div>
				<h2>TRYING TO EDIT A STUDENT</h2>
				<form onSubmit={handleSubmit}>
					First Name:
					<input
						type="text"
						placeholder="Enter Student First Name"
						name="studentFirstName"
						onChange={handleFirstNameChange}
						value={studentFirstName}
					/>
					Last Name:
					<input
						type="text"
						placeholder="Enter Student Last Name"
						name="studentLastName"
						onChange={handleLastNameChange}
						value={studentLastName}
					/>
					Email:
					<input
						type="text"
						placeholder="Enter updated email"
						name="email"
						onChange={handleEmailChange}
						value={studentEmail}
					/>
					GPA:
					<input
						type="text"
						placeholder="Enter Updated GPA"
						name="gpa"
						onChange={handleGPAChange}
						value={studentGPA}
					/>
					Campus:
                    <select name='campusId' placeholder="campus">
                    <option value={-1}> Update Campus </option>
						{campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
					</select>
					<div>
						<button type="submit" className="ui icon button">
							<i className="add user icon">Update</i>
						</button>
					</div>
				</form>
			</div>
		);

}

const mapStateToProps = function (state){
	return {
        students: state.students,
		// studentFirstName: state.newStudentEntry.firstName,
		// studentLastName: state.newStudentEntry.lastName,
		// studentEmail: state.newStudentEntry.email,
		// studentGPA: state.newStudentEntry.gpa,
		campuses: state.campuses

	};
};

const mapDispatchToProps = function (dispatch, ownProps) {
	return {
		handleSubmit (e) {
            e.preventDefault();

			const firstName = e.target.studentFirstName.value;
			const lastName = e.target.studentLastName.value;
			const email = e.target.email.value;
			const gpa = e.target.gpa.value;
            const campusId = e.target.campusId.value;
            const studentId = ownProps.match.params.studentId;
        
			dispatch(updateStudent({ firstName, lastName, email, gpa, campusId}, studentId));

		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
