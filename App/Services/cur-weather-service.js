'use strict';
const key = require('../../key.json');

function getCurrentWeather(){
  let newState = {
    city:'Atlanta',
    state:'GA'
  };
  return fetch('/api/currentLoc').then(response=>response.json())
  .then(resJson=>{
    newState.city = resJson.city ||newState.city;
    newState.state = resJson.state || newState.state;
    //console.log('in getCurrentWeather');
  })
  .then(()=>{
    return fetch(`https://api.wunderground.com/api/${key.key}/geolookup/conditions/q/${newState.state}/${newState.city}.json`)
      .then(response =>  response.json())
      .then(resJson=>{
        //console.log(resJson);
        newState.weather = resJson.current_observation.weather;
        newState.icon = resJson.current_observation.icon_url;
        return newState;
      });
    });
}

module.exports.getCurrentWeather = getCurrentWeather;
