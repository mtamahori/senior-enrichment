import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import history from './history';

import Root from './components/Root';
import Navbar from './components/Navbar';
import Home from './components/Home';

import AllCampusesList from './components/Campuses/AllCampusesList';
import CampusListItem from './components/Campuses/CampusListItem';
import CampusDetail from './components/Campuses/CampusDetail';
import EditCampus from './components/Campuses/EditCampus';
import AddCampus from './components/Campuses/AddCampus';

import AllStudentsList from './components/Students/AllStudentsList';
import StudentListItem from './components/Students/StudentListItem';
import StudentDetail from './components/Students/StudentDetail';
import EditStudent from './components/Students/EditStudent';
import AddStudent from './components/Students/AddStudent';

export default class Routes extends Component {

  // componentDidMount() {
  //   this.props.fetchInitialData();
  // }

  render() {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={AllCampusesList} />
            <Route exact path="/campuses/add" component={AddCampus} />
            <Route exact path="/campuses/:id" component={CampusDetail} />
            <Route exact path="/campuses/:id/edit" component={EditCampus} />
            <Route exact path="/students" component={AllStudentsList} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/:id" component={StudentDetail} />
            <Route exact path="/students/:id/edit" component={EditStudent} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

// const mapState = function (state) {

// }

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCampuses());
//     dispatch(fetchStudents());
//   }
// });

// export default connect(mapState, mapDispatch)(Routes);

