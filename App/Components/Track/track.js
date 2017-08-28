import React from 'react';

const Track = (props) => {
  return (
    <div className='track-container' onClick={()=>{socket.emit('setSong', props.trackId);}}>
      <div className='track-bg'>
        <div className='track-info'>
          props.trackName
          <br />
          props.trackArtist
        </div>
      </div>
    </div>
  );
};

export default Track;
