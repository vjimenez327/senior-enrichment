import React, {Component} from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Button, Icon} from 'semantic-ui-react';
import NewStudent from './NewStudent';
import EditStudent from './EditStudent';
import { deleteStudent } from '../reducers/index';

 function AllStudents (props){

	 const handleDelete = (id) => {
		 props.deleteStudent(id);
	 };

	return (
		<div className ="table">
		<thead>
        <tr>
			<th scope="col">Student Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>

		<tbody>
			{props.students.map(student => {
				return (
					<tr key = {student.id}>
							<td>
							<NavLink to={`/students/${student.id}`}>
								{student.fullName}
								</NavLink>
							</td>
							<td>
							<NavLink to={`/editStudent/${student.id}`}>
							<button type="submit" className="ui icon button">
								<i className="edit icon">Edit Student</i>
							</button>
							</NavLink>
							</td>

							<td>
							<button type="submit" className="ui icon button" onClick ={ () => handleDelete(student.id)}>
							<i className="user delete icon">Delete Student</i>
							</button>
							</td>
						
					</tr>
				);
			})
		}
		</tbody>

		<NavLink to="/newStudent">
			<button type="submit" className="ui icon button">
				<i className="add user icon">Add Student</i>
			</button>
			</NavLink>
		</div>
	);
}

const mapStateToProps = (storeState) => {
	return {
		students: storeState.students
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteStudent: (id) =>  {
			dispatch(deleteStudent(id))
		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
