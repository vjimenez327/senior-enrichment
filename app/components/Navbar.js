import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

export default class Navbar extends Component {
	constructor(props){
        super(props);
	}


    render() {
        return (
            <navbar>
                <section>
                    <h3><NavLink to='/campus_route'> Campuses </NavLink></h3>
                </section>
                <section>
                    <h3><NavLink to='student_route'> Students </NavLink></h3>
                </section>
            </navbar>
        );
    }
}
