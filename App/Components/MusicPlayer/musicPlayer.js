import React from 'react';
import PlayerControls from './PlayerControls';
import PlayerBar from './playerBar.js';
import CurrentSong from './currentSong.js';

class MusicPlayer extends React.Component {
  render(){
    return (
      <div className='player-container'>
        <PlayerControls isPlaying={false} />
        <PlayerBar currentTime={this.props.currentTime} totalTime={this.props.totalTime}/>
        <CurrentSong title={this.props.title} artist={this.props.artist}/>
      </div>
    );
  }
}

MusicPlayer.defaultProps = {
  isPlaying:false;
  currentTime:'0:00';
  totalTime: '5:00';
  title: 'No Title';
  artist: 'No Artist';
}

export default MusicPlayer;
