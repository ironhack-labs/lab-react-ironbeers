import React from 'react';

export function SearchBar(props) {
  const handleChange = (event) => {
    props.handleSearch(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        name="search"
        placeholder="Type the name of the beer you are looking for"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
