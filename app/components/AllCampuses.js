import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { deleteCampus } from '../reducers/index';


 function AllCampuses (props) {

    const handleDelete = (id) => {
        props.deleteCampus(id);
    };

    return (
    <div className ="table">
        <thead>
        <tr>
            <th scope="col">Campus Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>

        <tbody>
            {props.campuses.map(campus => {
                    return (
                        <tr key= {campus.id} >
                            
                             <td>
                            <NavLink to={`/campuses/${campus.id}`}>
                                     {campus.name}
                             </NavLink>
                             </td>

                            <td>
                            <NavLink to={`/editCampus/${campus.id}`}>
							<button type="submit" className="btn btn-secondary">
								<i className="edit icon">Edit Campus</i>
							</button>
                            </NavLink>
                            </td>
                            
                            <td>
                            <button type="submit" className="btn btn-secondary" onClick ={ () => handleDelete(campus.id)}>
							<i className="delete icon">Delete Campus</i>
                            </button>
                            </td>
                            
                        </tr>
                    )
                })
            }
        </tbody>
        <NavLink to='/newCampus'>
        <button type="submit" className="ui icon button">
            <i className="add icon">Add A Campus</i>
        </button>
        </NavLink>
    </div>
    ) 
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteCampus: (id) =>  {
			dispatch(deleteCampus(id))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)