import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

import { updateStudent } from '../../reducers/Students';

class StudentDetail extends Component {
  constructor(props) {
    super(props);

    this.editStudentInfo = this.editStudentInfo.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="current-student">
          {this.renderCurrentStudent()}
        </div>
        <div className="current-student-campus">
          {this.renderCurrentStudentCampus()}
        </div>
        <br />
        <div className="edit-student-info">
          {this.renderEditStudentInfo()}
        </div>
        <br />
      </div>
    );
  }

  renderCurrentStudent() {
    return (
      <div>
        <div className="current-student-info" >
          {
            this.props.Students
              .filter(student => student.id === this.props.student.id)
              .map(student =>
                (
                  <div key={student.id}>
                    <h2> {'~~~ ' + student.name + ' ~~~'} </h2>
                    <h5> Email: {student.email} </h5>
                    <h5> Student ID: {student.id} </h5>
                    <h5> Campus ID: {student.campusId} </h5>
                  </div>
                )
              )
          }
        </div>
      </div>
    )
  }

  renderCurrentStudentCampus() {
    return (
      <div>
        <h5>Current Campus:</h5>
        <div className="current-student-campus">
          {
            this.props.Campuses
              .filter(campus => campus.id === this.props.student.campusId)
              .map(campus =>
                (
                  <div key={campus.id}>
                    <NavLink
                      className="single-campus-link"
                      activeClassName="active"
                      to={`/campuses/${campus.id}`}>
                      <h4>
                        {campus.name}
                      </h4>
                    </NavLink>
                  </div>
                )
              )
          }
        </div>
      </div>
    )
  }

  renderEditStudentInfo() {
    return (
      <div>
        <form onSubmit={this.editStudentInfo}>
          <div className="new-student-input-body">
            <h4>Edit Student Info: </h4>
            <h4 className="new-student-input-field">
              <input
                name="name"
                type="text"
                placeholder="Student Name" />
            </h4>
            <h4 className="new-student-input-field">
              <input
                name="email"
                type="text"
                placeholder="Student Email" />
            </h4>
            <h4 className="new-student-input-field">
              <input
                name="campus"
                type="text"
                placeholder="Campus ID #" />
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

  editStudentInfo(event) {
    event.preventDefault();
    const student = {
      id: this.props.student.id,
      name: event.target.name.value ? event.target.name.value : this.props.student.name,
      email: event.target.email.value ? event.target.email.value : this.props.student.email,
      campusId: event.target.campus.value ? event.target.campus.value : this.props.student.campusId
    };
    this.props.updateStudent(student);
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';
  }

}


const mapState = ({ Campuses, Students }, ownProps) => {
  const studentParamId = Number(ownProps.match.params.id);
  return {
    student: _.find(Students, student => student.id === studentParamId),
    Campuses,
    Students
  };
}

const mapDispatch = { updateStudent };

export default connect(mapState, mapDispatch)(StudentDetail);
