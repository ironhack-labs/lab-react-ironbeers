import React, { useState } from 'react';

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');

  const inputChangeHandler = (event) => {
    setSearchInput(event.target);
    props.searchBeer(searchInput);
  };

  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Search for beer"
          onChange={inputChangeHandler}
        />
      </form>
    </div>
  );
}

export default SearchBar;
