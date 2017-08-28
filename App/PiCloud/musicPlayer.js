//const load = require('audio-loader');
//const play = require('audio-play');
const load = null;
const play = null;
let mpg = require('mpg123');
let WinPlayer = require('node-mpg123');

//let player = require('play-sound')(opts={});


//Temp stuff to simulate options on Windows. mpg123 does not work because no cmd controls for Windows
const {spawn} = require('child_process');
const child = null;

const MusicPlayer = {
  player: new mpg.MpgPlayer(),
  winPlayer: new WinPlayer('./PiCloud/Music/Lobby.mp3'),
  started: false,
  isPlaying: false,

  playSong: function(songName){
      //player.play('./PiCloud/Music/Lobby.mp3');

      //TEMP WINDOWS
      if(this.started){
        this.winPlayer.stop();
        //this.winPlayer = new WinPlayer('songName');
        this.winPlayer = new WinPlayer('./PiCloud/Music/Lobby.mp3');
      }
      this.started = true;
      this.isPlaying = true;
      this.winPlayer.play();

  },

  getVolume: (vol) => player.volume,

  setVolume: function(vol){
    this.player.volume = vol;
  },

  callStuff:function(){
    console.log(playbackObj && playbackObj.currentTime);
  },

  play: function(){
    //Note: pause sends a message that resumes playback if already paused;
    //this.player.pause();

    //TEMP WINDOWS STUFF
    if(!this.started){
      this.winPlayer.play();
      this.started = true;
      this.isPlaying = true;
      return this.isPlaying;
    }
    if(this.isPlaying) this.winPlayer.stop();
    else this.winPlayer.play();
    this.isPlaying = !this.isPlaying;

    return this.isPlaying;
  },

  seek: function(percent){
    //player.seek(percent);

  },

  getCurrentTime: function() {
    //return player.currentTime;

    //TEMP WINDOWS
    return '2:55';
  }
};

module.exports = MusicPlayer;
//export default MusicPlayer;
