/* global document */
import React from 'react';
import { render } from 'react-dom';
import style from '../assets/stylesheets/main.scss'; // eslint-disable-line
import App from './components/App';

render(<App />, document.getElementById('app'));
