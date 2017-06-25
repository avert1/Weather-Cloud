import React from 'react';

const CurrentSong = (props) => (
  <div className='current-song-container'>
    <div className='current-song-cover'>
    </div>
    <div className='current-song-info'>
      <div>
        {props.title}
      </div>
      <div>
        {props.artist}
      </div>
    </div>
  </div>
)

export default CurrentSong;
