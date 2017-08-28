import React from 'react';
import SearchBar from './searchBar.js';
import TrackLister from '../TrackLister/trackLister.js';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchVal:'',
      results:[]
    }
  }

  render(){
    return (
      <div className='search-container'>
        <SearchBar searchFor={this.searchFor.bind(this)} />
        <div className='search-results'>
          {this.renderResults()}
        </div>
      </div>
    )
  }

  searchFor(searchVal){
    console.log(searchVal);
    if(searchVal.length  < 3)return;
    fetch(`https://api.spotify.com/v1/search?type=track&q=${searchVal.replace(/ /g, '%20')}`).then(results=>{
      console.log('results:');
      console.log(results);
      return;
    });
    /*this.setState({
      searchVal,
      results:[{id:1}, {id:1}]
    });*/
  }

  renderResults(){
    return (
      <TrackLister tracks={this.state.results} />
    );
  }
}

export default Search;
