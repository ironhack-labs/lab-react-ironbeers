import React from 'react';

function BeerSearch(props) {
  console.log(props);
  return (
    <form>
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search a beer"
        onChange={props.handleInputChange}
        value={props.query}
      />
    </form>
  );
}

export default BeerSearch;
