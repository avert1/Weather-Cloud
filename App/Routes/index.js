'use strict';
import React from 'react';
const ReactDom = require('react-dom');
import CurrentWeatherBox from '../Components/currentWeatherBox.js';

ReactDom.render(
  <CurrentWeatherBox />,
  document.getElementById('root')
);
