import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {updateCampus} from '../reducers/';
import { connect } from 'react-redux';



function EditCampus (props) {

    const {handleSubmit, campuses, students} = props;
    
    
    const currentCampusId = Number(props.match.params.campusId);
    const foundCampus = campuses.find(campus => campus.id === currentCampusId);
	const foundStudent = students.find(student => student.campusId === currentCampusId);
    
    
		return (
			<div>
				<h2>TRYING TO EDIT A CAMPUS</h2>
				<form onSubmit={handleSubmit}>
                Campus Name:
                <input
                    type="text"
                    placeholder="Enter Campus Name"
                    name="campusName"

                />
                Image URL:
                <input
                    type="text"
                    placeholder="Enter IMG URL"
                    name="imageUrl"

                />
                Description:
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                />
             
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

			const name = e.target.campusName.value;
            const imageUrl = e.target.imageUrl.value ? e.target.imageUrl.value : undefined;
            const description = e.target.description.value;
            const campusId = ownProps.match.params.campusId;
        
			dispatch(updateCampus({ name, imageUrl, description}, campusId, ownProps.history));

		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
