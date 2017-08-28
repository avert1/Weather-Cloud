'use strict';

const express = require('express');
const App = express();
const server = require('http').createServer(App);
const io = require('socket.io')(server);
const musicPlayer = require('./PiCloud/musicPlayer.js');

const weatherService = require('./Services/cur-weather-service.js');


let city, state, curWeatherState;

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

setInterval(function(){
  if(musicPlayer.isPlaying){
    io.emit('time', musicPlayer.getCurrentTime());
  }
}, 500);
io.on('connection', function(socket) {
  console.log('client connected');

  socket.on('setSong', function(songName){
    musicPlayer.playSong(songName);
    io.emit('curSong', {
      isPlaying:true,
      currentTime:'0:00',
      totalTime:'4:29',
      title:'Still Schloopin',
      artist:'Best Frands'
    });
  });

  socket.on('setPlay', function(data){
    io.emit( 'play', musicPlayer.play());
  });

  socket.on('setVolume', function(vol){
    musicPlayer.setVolume(vol);
    io.emit('volume', vol);
  });
});

server.listen(3000, function(){
  console.log("Listening on port 3000");
})
//module.exports = App;
