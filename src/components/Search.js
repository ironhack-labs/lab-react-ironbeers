import React from 'react'

function Search(props) {

const {searchInput, handleSearchInput} = props;

  return (
    <div>
        <label>
          Search Beers
          <input className="input-field" type="text"
          name="name" 
          value={searchInput} 
          onChange={(e) => handleSearchInput(e)} />
        </label>
    </div>
  )
}

export default Search;