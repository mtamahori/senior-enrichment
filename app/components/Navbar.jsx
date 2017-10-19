import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import history from '../history';

const Navbar = () => (
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/campuses" activeClassName="active">CAMPUSES</NavLink>
          </li>
          <li>
            <NavLink to="/students" activeClassName="active">STUDENTS</NavLink>
          </li>
        </ul>
      </div>
)

export default Navbar;








// older attempt

    // return (
    //   <nav className="navbar">
    //     <div className="container">
    //       <div className="collapse navbar-collapse">
    //           { this.renderCampusesButton() }
    //           { this.renderStudentsButton() }
    //       </div>
    //     </div>
    //   </nav>
    // )


  // renderCampusesButton() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //         <NavLink to="/campuses" activeClassName="active">CAMPUSES</NavLink>
  //       </li>
  //     </ul>
  //   )
  // }

  // renderStudentsButton() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //         <NavLink to="/students" activeClassName="active">STUDENTS</NavLink>
  //       </li>
  //     </ul>
  //   )
  // }
