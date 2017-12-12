import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';

 export class Root extends Component {

  componentDidMount() {
    this.props.loadStudents();
    this.props.loadCampuses();
  }
  
    render() {
      return (
        <div>
          <center><h1>Welcome to School!</h1></center>
          <Navbar />

            <Switch>
    
              <Route exact path="/campuses" component={AllCampuses} />
              <Route path="/campuses/:campusId" component={SingleCampus} />
              <Route exact path="/newCampus" component={NewCampus} />           
              <Route path="/editCampus/:campusId" component={EditCampus} />   
            
              <Route exact path="/newStudent" component={NewStudent} />
              <Route path="/editStudent/:studentId" component={EditStudent} />
              <Route exact path="/students" component={AllStudents} />
              <Route path="/students/:studentId" component={SingleStudent} />
            </Switch>

        </div>
    );}

}

const mapDispatchToProps = (dispatch) => {
	return {
    loadStudents: () => dispatch(fetchStudents()),
    loadCampuses: () => dispatch(fetchCampuses())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(Root));
