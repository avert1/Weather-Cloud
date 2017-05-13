'use strict';

const express = require('express');
const weatherService = require('./Services/cur-weather-service.js');

const App = express();

App.get('/', function(req,res){
  //Check current weather data
  weatherService.GetCurrentWeather(req,res);
  //res.send('hi');

});

App.get('/loc/:state/:city', (req, res) =>{
  weatherService.GetCurrentWeather(req,res);
})

module.exports = App;
