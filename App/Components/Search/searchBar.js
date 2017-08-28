import React from 'react';

const SearchBar = (props) => (
  <div className='search-bar'>
    <input type='text' placeholder='Press enter to search boyeeeee' onKeyPress={(e)=>{if(e.key === 'Enter')props.searchFor(e.target.value)}} />
  </div>
);

export default SearchBar;
