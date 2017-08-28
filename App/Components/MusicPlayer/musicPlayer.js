import React from 'react';
import PlayerControls from './PlayerControls';
import PlayerBar from './playerBar.js';
import CurrentSong from './currentSong.js';

class MusicPlayer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isPlaying:false,
      currentTime:'0:00',
      totalTime:'5:00',
      title:'A Title',
      artist:'An Artist',
      hidePlayer:true
    };
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        hidePlayer:false
      });
    }, 2000);

    socket.on('test', (data)=>{
      console.log('received data ');
      console.log(data);
    });
    socket.on('play', (playing)=>{
      console.log('received data ');
      console.log(playing);
      this.setState({
        isPlaying:playing
      });

    });
    socket.on('time', (time)=>{
      this.setState({
        currentTime:time
      });
    });
    socket.on('curSong', (data)=>{this.updateSong(data)});
  }

  render(){
    return (
      <div className={'player-container'+ (this.state.hidePlayer ? ' hidden' : ' visible')}>
        <PlayerControls isPlaying={this.state.isPlaying} />
        <PlayerBar currentTime={this.state.currentTime} totalTime={this.state.totalTime}/>
        <CurrentSong title={this.state.title} artist={this.state.artist}/>
      </div>
    );
  }

  updateSong(songInfo){
    this.setState({
      isPlaying:songInfo.isPlaying || false,
      currentTime:songInfo.currentTime || '0:00',
      totalTime: songInfo.totalTime || '4:00',
      title: songInfo.title || 'A Title',
      artist: songInfo.artist || 'An Artist'
    });
  }
}

MusicPlayer.defaultProps = {
  isPlaying:false,
  currentTime:'0:00',
  totalTime: '5:00',
  title: 'No Title',
  artist: 'No Artist'
}

export default MusicPlayer;
