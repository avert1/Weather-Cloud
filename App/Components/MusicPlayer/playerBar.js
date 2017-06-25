import React from 'react';

const PlayerBar =(props)=> (
  <div className='player-bar-container'>
    <div className='progressText'>{props.currentTime}</div>
    <div className='player-bar'>
      <div className='player-barfill'></div>
      </div>
      <div className='progressText'>{props.totalTime}</div>
  </div>
);

export default PlayerBar;
