import React from 'react';

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input style={{ width: "80vw" }} name="search" value={props.search} onChange={(event) => props.searchChange(event)} />
    </div>
  )
}

export default Search;