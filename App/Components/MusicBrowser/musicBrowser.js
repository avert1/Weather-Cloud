import React from 'react';
import Library from '../Library/library.js';
import PlaylistLister from '../PlaylistLister/playlistLister.js';
import Search from '../Search/search.js';

class MusicBrowser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tab:'library'
    }
  }

  render(){
    //If this becomes more complicated, consider moving to seperate file and importing
    const navLinks = ['library', 'playlists', 'search'];
    let component = <Library />;
    if(this.state.tab === 'playlists'){
        component = <PlaylistLister />
    }
    else if(this.state.tab === 'search'){
      component = <Search />
    }
    return (
      <div className='browser-container'>
        <ul className='Nav'>
          {this.getNavigation(navLinks)}
        </ul>
        <div className='overflow-helper'>
          {component}
        </div>
      </div>
    );
  }

  setTab(tabName){
    console.log("setting!" );
    this.setState({
      tab:tabName
    })
  }

  getNavigation(navLinks){
    return navLinks.map((link)=>{
        let cName = (this.state.tab === link)?'current':'';
        return <li key={link} className = {cName}  onClick={() => this.setTab(link)}>{link}</li>
    });
  }
}

export default MusicBrowser;
