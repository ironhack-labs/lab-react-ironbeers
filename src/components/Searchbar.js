import React from 'react';
import { useState, useEffect } from 'react';

function Searchbar() {
  const [search, setSearch] = useState();
  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  //search input handle

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSearchSubmit = async (e) => {
    try {
      //prevent page reload on search
      e.preventDefault();
    } catch (error) {
      setSearchErrorMessage('Beer not found');
    }
  };

  return (
    <div>
      <h2>Searchbar</h2>

      {/* SEARCHBAR */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a Beer"
          name="search"
          value={search}
          onClick={handleSearch}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
