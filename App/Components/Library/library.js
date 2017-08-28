import React from 'react';
import TrackLister from '../TrackLister/trackLister.js';

class Library extends React.Component {
  render(){
    const tracks = [
      {id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},
    ];
    return (
      <div className='library'>
        <TrackLister tracks={tracks} />
      </div>
    );
  }

  createTrackJSX(tracks){
    let i = 0;
    return tracks.map((track)=>{
      i++;
      return <Track trackId ={track.trackId} key={i}/>
    });
  }
}

export default Library;
