'use strict';

const https = require('https');
const key = require('../key.json');

function GetCurrentWeather(req, res) {
  //Pull data from weather.com API

    let state = req.params.state ? req.params.state : 'GA';
    let city = req.params.city ? req.params.city : 'Mableton';

    https.get(`https://api.wunderground.com/api/${key.key}/geolookup/conditions/q/${state}/${city}.json`, (response) =>{
      response.on('data', (data) => {
        console.log(JSON.parse(data));
        let weatherData = JSON.parse(data);
        res.send(`Current Temp for ${city}, ${state}: ${weatherData.current_observation.temp_f}`);
      });
    })
}

module.exports.GetCurrentWeather = GetCurrentWeather;
