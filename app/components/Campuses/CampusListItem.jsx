import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeCampus } from '../../reducers/Campuses';

class CampusListItem extends Component {
  constructor(props) {
    super(props);

    this.deleteThisCampus = this.deleteThisCampus.bind(this);
  }

  render() {
    const { campus } = this.props;
    return (
      <div>
        <div>
          <img src={campus.photo} />
        </div>
        <NavLink
          className="single-campus-link"
          activeClassName="active"
          to={`/campuses/${campus.id}`}>
          <h4>
            {campus.name}
          </h4>
        </NavLink>
        <button
          className="btn btn-default"
          onClick={this.deleteThisCampus}>
          ^^DELETE^^
        </button>
      </div>
    )
  }

  deleteThisCampus(event) {
    const { removeCampus, campus } = this.props;
    event.stopPropagation();
    removeCampus(campus);
  }

}

const mapState = ({ Campuses }) => ({ Campuses });

const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(CampusListItem);
