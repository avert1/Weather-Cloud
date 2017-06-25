'use strict';
import React from 'react';
const ReactDom = require('react-dom');
import CurrentWeatherBox from '../Components/CurrentWeatherBox/currentWeatherBox.js';
import NavBar from '../Components/NavBar/navBar.js';
import PlaylistLister from '../Components/PlaylistLister/playlistLister.js';
import MusicPlayer from '../Components/MusicPlayer/musicPlayer.js';

//Services
import currentWeatherService from '../Services/cur-weather-service.js';

currentWeatherService.getCurrentWeather().then(weatherData=>{
  ReactDom.render(
    (<div>
      <NavBar weatherData={weatherData}/>
      <CurrentWeatherBox weatherData={weatherData}/>
      <PlaylistLister weather={weatherData.weather}/>
      <MusicPlayer />
    </div>),
    document.getElementById('root')
  );
});
