import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postCampus } from '../reducers/index';


function NewCampus (props){

const {handleSubmit, name, imageUrl, description}  = props;

    return (
        <div>
            <h2>ADD A CAMPUS BELOW!</h2>
            <form onSubmit={handleSubmit}>
                Campus Name:
                <input
                    type="text"
                    placeholder="Enter Campus Name"
                    name="campusName"
                    value={name}
                />
                Image URL:
                <input
                    type="text"
                    placeholder="Enter IMG URL"
                    name="imageUrl"
                    value={imageUrl}
                />
                Description:
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={description}
                />
             
                <div>
                    <button type="submit" className="ui icon button">
                        <i className="add user icon">Add Campus</i>
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = function (dispatch, ownProps) {
    
	return {
		handleSubmit (e) {
            e.preventDefault();
			const name = e.target.campusName.value;
			const imageUrl = e.target.imageUrl.value ?  e.target.imageUrl.value : undefined;
			const description = e.target.description.value;
       
			dispatch(postCampus({ name, imageUrl, description}, ownProps.history));

		}
	};
};

export default connect(null, mapDispatchToProps)(NewCampus);
