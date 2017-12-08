import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';

 class AllStudents extends Component {

	componentDidMount() {
		this.props.loadStudents();
	}

    render(){
        return (
			<ul>
				{this.props.students.map(student => { 
					return ( 
						<li key = {student.id}>
							<NavLink to={`/student_route/${student.id}`}>
								<span>{student.firstName} </span>
							</NavLink>
						</li>
					)
				})
			}
			</ul>
        )
    }
} 

const mapStateToProps = (storeState) => {
	return {
		students: storeState.students
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loadStudents: () => dispatch(fetchStudents())
	}
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudents))
