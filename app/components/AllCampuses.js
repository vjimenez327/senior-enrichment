import React, {Component} from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampuses } from '../reducers/campuses';

 class AllCampuses extends Component {

    componentDidMount() {
        this.props.loadCampuses();
    }
    
    render () {
        return (
        <ul>
            {this.props.campuses.map(campus => {
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
    }   

 
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = function (dispatch){
    return {
        loadCampuses: function(){
            dispatch(fetchCampuses())
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCampuses))