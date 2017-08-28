import React from 'react';
import Track from '../Track/track.js';

const TrackLister = (props) => {
  const createTrackJSX = (tracks) => {
    let i = 0;
    return tracks.map((track)=>{
      i++;
      return <Track trackId ={track.trackId} key={i}/>
    });
  }

  return (
    <div className='track-list'>
      {createTrackJSX(props.tracks)}
    </div>
  );
}

export default TrackLister;
