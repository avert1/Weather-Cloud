'use strict';

const express = require('express');
const weatherService = require('./Services/cur-weather-service.js');

const App = express();
App.use(express.static('public'));
App.get('/', function(req,res){
  //Check current weather data
  //weatherService.GetCurrentWeather(req,res);
  res.sendFile(__dirname+ '/Views/index.html');
  //res.send('hi');

});

App.get('/loc/:state/:city', (req, res) =>{
  weatherService.GetCurrentWeather(req,res);
})

module.exports = App;
