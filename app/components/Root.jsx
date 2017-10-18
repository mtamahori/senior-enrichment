import React, { Component } from 'react';

// const Root = ({ children }) => (
//   <div id="main" className="container-fluid">
//     <Navbar />
//     { children }
//   </div>
// );

const Root = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
);

export default Root;
