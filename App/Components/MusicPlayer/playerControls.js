import React from 'react';

const PlayerControls = ({isPlaying}) => {

  const sendPlay = (isPlaying) => {
    console.log('emitting play');
    if(socket)
      socket.emit('setPlay');
  }
  return (
    <div className = 'player-controls'>
      <span className='icon prev'></span>
      <span className={'icon ' + (isPlaying? 'pause' : 'play')} onClick={sendPlay}></span>
      <span className='icon next'></span>
    </div>
  );
}

export default PlayerControls;
