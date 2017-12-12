import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {postStudent} from '../reducers/';
import { connect } from 'react-redux';

function newStudentEntry(props) {

	const {handleSubmit,  studentFirstName, studentLastName, studentEmail, studentGPA, campuses} = props;

		return (
			<div>
			<h2>ADD A STUDENT BELOW!</h2>
				<form onSubmit={handleSubmit}>
					First Name:
					<input
						type="text"
						placeholder="Enter First Name"
						name="studentFirstName"
						value={studentFirstName}
					/>
					Last Name:
					<input
						type="text"
						placeholder="Enter Last Name"
						name="studentLastName"
						value={studentLastName}
					/>
					Email:
					<input
						type="text"
						placeholder="Enter email"
						name="email"
						value={studentEmail}
					/>
					GPA:
					<input
						type="text"
						placeholder="Enter GPA"
						name="gpa"
						value={studentGPA}
					/>
					Campus:
					<select name='campusId'>
					<option value={-1}> Select A Campus </option>
						{campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
					</select>

					<div>
						<button type="submit" className="ui icon button">
							<i className="add user icon">Add Student</i>
						</button>
					</div>
				</form>
			</div>
		);

}


const mapStateToProps = function (state){
	return {
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

			dispatch(postStudent({ firstName, lastName, email, gpa, campusId}, ownProps.history));


		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(newStudentEntry);
