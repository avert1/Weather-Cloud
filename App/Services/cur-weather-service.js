'use strict';

const https = require('https');
const key = require('../../key.json');

//Gets weather data from wunderground and return relevant data as an object
function GetCurrentWeather(state, city) {
  //Pull data from weather.com API
    return new Promise(function(resolve, reject) {
      https.get(`https://api.wunderground.com/api/${key.key}/geolookup/conditions/q/${state}/${city}.json`, (response) =>{
        response.on('data', (data) => {
          console.log(JSON.parse(data));
          let weatherData = {
            city: city,
            state:state,
            weatherData: JSON.parse(data)
          };
          resolve(weatherData);
        });
      });
    });
}

module.exports.GetCurrentWeather = GetCurrentWeather;
