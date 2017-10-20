import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../../reducers/Campuses';
import CampusListItem from './CampusListItem';

class AllCampusesList extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: ''
    // };

    this.renderNewCampus = this.renderNewCampus.bind(this);
    this.submitNewCampus = this.submitNewCampus.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="add-new-campus">
          {this.renderNewCampus()}
        </div>
        <br />
        <div className="campus-list">
          {
            this.props.Campuses
              .map(campus => <CampusListItem campus={campus} key={campus.id} />)
          }
        </div>
      </div>
    );
  }

  renderNewCampus() {
    return (
      <div>
        <form onSubmit={this.submitNewCampus}>
          <div className="new-campus-input-body">
            <h3>ADD NEW CAMPUS</h3>
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

  submitNewCampus(event) {
    event.preventDefault();
    const campus = {
      name: event.target.name.value
    };
    this.props.addCampus(campus);
    event.target.name.value = '';
  }

}

const mapState = ({ Campuses }) => ({ Campuses });

const mapDispatch = { addCampus };

export default connect(mapState, mapDispatch)(AllCampusesList);
