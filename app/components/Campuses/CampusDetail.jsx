import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import StudentListItem from '../Students/StudentListItem';
import { addStudent } from '../../reducers/Students';
import { updateCampus } from '../../reducers/Campuses';

// import { fetchCampusById } from '../../reducers/Campuses';

class CampusDetail extends Component {
  constructor(props) {
    super(props);

    // this.renderCurrentCampus = this.renderCurrentCampus.bind(this);
    // this.renderNewStudent = this.renderNewStudent.bind(this);
    // this.renderEnrolledStudents = this.renderEnrolledStudents.bind(this);
    // this.renderEditCampusInfo = this.renderEditCampusInfo.bind(this);
    this.enrollNewStudent = this.enrollNewStudent.bind(this);
    this.editCampusInfo = this.editCampusInfo.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="current-campus">
          {this.renderCurrentCampus()}
        </div>
        <br />
        <div className="edit-campus-name">
          {this.renderEditCampusInfo()}
        </div>
        <br />
        <div className="enroll-new-student">
          {this.renderNewStudent()}
        </div>
        <br />
        <div className="enrolled-student-list">
          {this.renderEnrolledStudents()}
        </div>
        <br />
      </div>
    );
  }

  renderCurrentCampus() {
    return (
      <div>
        {
          this.props.Campuses
            .filter(campus => campus.id === this.props.campus.id)
            .map(campus =>
              (
                <div key={campus.id}>
                  <h2> {'!!! ' + campus.name + ' !!!'} </h2>
                  <h5> CampusID: {campus.id} </h5>
                </div>
              )
            )
        }
      </div>
    )

    // const currentCampus = this.props.fetchCampusById(Number(this.props.match.params.id));
    // console.log('CAMPUS', this.props.match.params.id);
    // return (
    //   <div>
    //   {
    //     currentCampus.name
    //   }
    //   </div>
    // )
  }

  renderEnrolledStudents() {
    return (
      <div>
        <h4>--Enrolled Students: </h4>
        {
          this.props.Students
            .filter(student => student.campusId === this.props.campus.id)
            .map(student => <StudentListItem student={student} key={student.id} />)
        }
      </div>
    )
  }

  renderEditCampusInfo() {
    return (
      <div>
        <form onSubmit={this.editCampusInfo}>
          <div className="new-campus-input-body">
            <h4>Edit Campus Name: </h4>
            <h4 className="new-campus-input-field">
              <input
                name="name"
                type="text"
                required
                placeholder="Campus Name" />
            </h4>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    )
  }

  renderNewStudent() {
    return (
      <div>
        <form onSubmit={this.enrollNewStudent}>
          <div className="new-student-input-body">
            <h4>Enroll New Student: </h4>
            <h4 className="new-student-input-field">
              <input
                name="name"
                type="text"
                required
                placeholder="Student Name" />
            </h4>
            <h4 className="new-student-input-field">
              <input
                name="email"
                type="text"
                required
                placeholder="Student Email" />
            </h4>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    )
  }

  enrollNewStudent(event) {
    event.preventDefault();
    const student = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: this.props.campus.id
    };
    this.props.addStudent(student);
    event.target.name.value = '';
    event.target.email.value = '';
  }

  editCampusInfo(event) {
    event.preventDefault();
    const campus = {
      id: this.props.campus.id,
      name: event.target.name.value
    };
    this.props.updateCampus(campus);
    event.target.name.value = '';
  }

}

const mapState = ({ Campuses, Students }, ownProps) => {
  const campusParamId = Number(ownProps.match.params.id);
  return {
    campus: _.find(Campuses, campus => campus.id === campusParamId),
    Students,
    Campuses
  };
}

const mapDispatch = { addStudent, updateCampus /*, fetchCampusById*/ };

export default connect(mapState, mapDispatch)(CampusDetail);
