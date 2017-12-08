import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';

function AllCampuses (props) {

    const mapStateToProps = function (state) {
        return {
            campuses: state.campuses
        }
    }

    const { campuses } = props;

    return (
        <ul>
            {
                campuses.map(campus => {
                    return (
                        <li key={campus.id}>
                            <NavLink to={`/campus_route/${campus.id}`}>
                                <span>{campus.name}</span>
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )


    export default withRouter(connect(mapStateToProps)(AllCampuses))
}