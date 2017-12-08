import React, {Component} from 'react';
import axios from 'axios';

export default class AllStudents extends Component {
	constructor(props){
		super(props);

		this.state = {
			students: []
		}
	}

	componentDidMount() {
		axios.get('api/student_route')
		.then(res => res.data)
		.then( students => this.setState({students}))
		.catch(err => console.log(err))
	}

    render(){
		console.log('you reached the students', this.state.students);
        return (
			<div>
				<ul>
					{this.state.students.map(student => <li key = {student.id}> {student.firstName} </li>)}
				</ul>
			</div>
        )
    }
}
