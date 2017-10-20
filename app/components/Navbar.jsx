import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import history from '../history';

const Navbar = () => (
  <div className="collapse navbar-collapse">
    <ul className="nav navbar-nav">
      <li>
        <NavLink to="/" activeClassName="active">HOME</NavLink>
      </li>
      <br />
      <li>
        <NavLink to="/campuses" activeClassName="active">CAMPUSES</NavLink>
      </li>
      <br />
      <li>
        <NavLink to="/students" activeClassName="active">STUDENTS</NavLink>
      </li>
    </ul>
    <br />
  </div>
)

export default Navbar;
