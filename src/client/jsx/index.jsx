/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import style from '../assets/stylesheets/main.scss'; // eslint-disable-line
import App from './components/App';

const rootRouter = (
  <Router history={browserHistory} >
    <Route path="/" component={App} />
  </Router>
);

render(rootRouter, document.getElementById('app'));
