'use strict';
import React from 'react';
const ReactDom = require('react-dom');
import CurrentWeatherBox from '../Components/CurrentWeatherBox/currentWeatherBox.js';
import NavBar from '../Components/NavBar/navBar.js';

//Services
import currentWeatherService from '../Services/cur-weather-service.js';

currentWeatherService.getCurrentWeather().then(weatherData=>{
  ReactDom.render(
    (<div>
      <NavBar weatherData={weatherData}/>
      <CurrentWeatherBox weatherData={weatherData}/>
    </div>),
    document.getElementById('root')
  );
});
