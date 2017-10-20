import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent } from '../../reducers/Students';

class StudentListItem extends Component {
  constructor(props) {
    super(props);
    this.deleteThisStudent = this.deleteThisStudent.bind(this);
  }

  render() {
    const { student } = this.props;
    return (
      <div>
        <NavLink
          className="single-student-link"
          activeClassName="active"
          to={`/students/${student.id}`}>
          <h4>
            {student.name}
          </h4>
        </NavLink>
        <button
          className="btn btn-default"
          onClick={this.deleteThisStudent}>
          ^^DELETE^^
          </button>
      </div>
    )
  }

  deleteThisStudent(event) {
    const { removeStudent, student } = this.props;
    event.stopPropagation();
    removeStudent(student);
  }
}

const mapState = ({ Students }) => ({ Students });

const mapDispatch = { removeStudent };

export default connect(mapState, mapDispatch)(StudentListItem);
