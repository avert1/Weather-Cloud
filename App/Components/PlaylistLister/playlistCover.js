import React from 'react';

class PlaylistCover extends React.Component {
  render(){
    return (
      <div className='pl-cover-container'>
        <div className='pl-cover-art'>
        </div>
        <div className='pl-name'>
          {this.props.plName || 'Untitled'}
        </div>
      </div>
    )
  }
}

export default PlaylistCover;
