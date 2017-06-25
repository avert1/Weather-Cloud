import React from 'react';
import PlaylistCover from './playListCover.js';

class PlaylistLister extends React.Component {
  render(){
    return (
      <div className='lister-container'>
        <div>
          <span className='header'>{this.props.weather || ''} Playlists</span>
        </div>
        <div className='list-covers'>
          <PlaylistCover plName='swag tunes' />
          <PlaylistCover plName='swag beats' />
        </div>
      </div>
    )
  }
}

export default PlaylistLister;
