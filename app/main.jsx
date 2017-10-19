'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Routes from './routes';

render(
  <Provider store={store}>
  <Routes />
  </Provider>,
  document.getElementById('main')
);


