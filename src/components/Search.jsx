import React from 'react';

const Search = (props) => {
  return(
    <div>
      <label>Search</label>
      <input type="text" name="q" value={props.q} onChange={(e) => props.searchHandler(e)} />
    </div>
  )
}

export default Search;