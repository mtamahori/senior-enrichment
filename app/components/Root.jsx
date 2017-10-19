import React, { Component } from 'react';
import Navbar from './Navbar';

const Root = ({ children }) => (
  <div id="root-component">
    <Navbar />
    {children}
  </div>
);

export default Root;
