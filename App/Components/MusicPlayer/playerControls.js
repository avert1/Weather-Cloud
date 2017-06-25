import React from 'react';

const PlayerControls = (isPlaying) => (
  <div className = 'player-controls'>
    <span className='icon prev'></span>
    <span className={'icon ' + isPlaying? pause : play}></span>
    <span className='icon next'></span>
  </div>
);

export default PlayerControls;
