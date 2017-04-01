'use strict';

const https = require('https');

function GetCurrentWeather() {
  //Pull data from weather.com API
    https.get('https://api.wunderground.com/api/key/geolookup/conditions/q/GA/Mableton.json', (res) =>{

      res.on('data', (data) => {
        console.log(JSON.parse(data));
        let weatherData = JSON.parse(d);
      });
    })
}

module.exports.GetCurrentWeather = GetCurrentWeather;
