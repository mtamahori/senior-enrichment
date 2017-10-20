import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../../reducers/Students';
import StudentListItem from './StudentListItem';

class AllStudentsList extends Component {
  constructor(props) {
    super(props);

    // this.renderNewStudent = this.renderNewStudent.bind(this);
    this.submitNewStudent = this.submitNewStudent.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="add-new-student">
          {this.renderNewStudent()}
        </div>
        <br />
        <h4>-- All Current Students: </h4>
        <div className="student-list">
          {
            this.props.Students
              .map(student => <StudentListItem student={student} key={student.id} />)
          }
        </div>
      </div>
    );
  }

  renderNewStudent() {
    return (
      <div>
        <form onSubmit={this.submitNewStudent}>
          <div className="new-student-input-body">
            <h3>ADD NEW STUDENT</h3>
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
            <h4 className="new-student-input-field">
              <input
                name="campus"
                type="text"
                required
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

  submitNewStudent(event) {
    event.preventDefault();
    const student = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: event.target.campus.value
    };
    this.props.addStudent(student);
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.campus.value = '';
  }

}

const mapState = ({ Students, Campuses }) => ({ Students, Campuses });

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(AllStudentsList);
