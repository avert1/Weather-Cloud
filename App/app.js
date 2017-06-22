'use strict';

const express = require('express');
const weatherService = require('./Services/cur-weather-service.js');

let city, state, curWeatherState;

const App = express();
App.use(express.static('public'));
App.get('/', function(req,res){
  //Check current weather data
  //weatherService.GetCurrentWeather(req,res);
  res.sendFile(__dirname+ '/Views/index.html');
  //res.send('hi');

});

/*App.get('/loc/:state/:city', (req, res) =>{
  weatherService.GetCurrentWeather(req,res);
});*/

//Methods for getting and setting Rasp-Pi related information
App.get('/api/currentLoc', function(req,res){
  res.json({
    city:city && state ? city : 'Atlanta',
    state:state && city ? state : 'GA'
  });
});

App.post('/api/setCurrentLoc', function(req,res){
  console.log('setting loc');
});

module.exports = App;
