import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import CampusListItem from './CampusListItem';
import StudentListItem from '../Students/StudentListItem';
import { fetchStudentById, addStudent } from '../../reducers/Students';
import { fetchCampusById, updateCampus } from '../../reducers/Campuses';

class CampusDetail extends Component {
  constructor(props) {
    super(props);

    this.renderNewStudent = this.renderNewStudent.bind(this);
    this.enrollNewStudent = this.enrollNewStudent.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="current-campus">
          {
            this.props.Campuses
              .filter(campus => campus.id === this.props.campus.id)
              .map(campus => <h2 key={campus.id}> {'!!! ' + campus.name + ' !!!'} </h2>)
          }
        </div>
        <div className="enroll-new-student">
          {this.renderNewStudent()}
        </div>
        <br />
        <div className="enrolled-student-list">
          <h4>--Currently Enrolled Students--</h4>
          {
            this.props.Students
              .filter(student => student.campusId === this.props.campus.id)
              .map(student => <StudentListItem student={student} key={student.id} />)
          }
        </div>
      </div>
    );
  }

  renderNewStudent() {
    return (
      <div>
        <form onSubmit={this.enrollNewStudent}>
          <div className="new-student-input-body">
            <h4>ENROLL NEW STUDENT</h4>
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

  // saveCampusInfo(event) {
  //   event.preventDefault();
  //   const { addStudent, campus } = this.props;
  //   const student = {
  //     name: event.target.name.value,
  //     email: event.target.email.value,
  //     campusId: event.target.campusId.value,
  //   };
  //   addStudent(student);
  //   event.target.name.value = '';
  // }

}

const mapState = ({ Campuses, Students }, ownProps) => {
  const campusParamId = Number(ownProps.match.params.id);
  return {
    campus: _.find(Campuses, campus => campus.id === campusParamId),
    Students,
    Campuses
  };
}

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(CampusDetail);
