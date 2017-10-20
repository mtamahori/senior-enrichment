import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusListItem from '../Campuses/CampusListItem';
import StudentListItem from './StudentListItem';
import { fetchCampusById } from '../../reducers/Campuses';
import { fetchStudentById } from '../../reducers/Students';
import { updateStudent } from '../../reducers/Students';

export default class StudentDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>StudentDetail</div>
    )
  }
}

// const mapState = null;

// const mapDispatch = null;

// export default connect(mapState, mapDispatch)(StudentDetail);


