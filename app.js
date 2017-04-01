'use strict';

const express = require('express');
const weatherService = require('./Services/cur-weather-service.js');

const App = express();

App.get('/', function(req,res){
  //Check current weather data
  weatherService.GetCurrentWeather();
  res.send('hi');

});

module.exports = App;
