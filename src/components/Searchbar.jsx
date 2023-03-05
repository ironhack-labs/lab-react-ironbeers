import React, { useState } from 'react';

function Searchbar({ searchBeers }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchBeers(e.target.value);
  };
  return (
    <div>      
      <input type="text" name="search" placeholder="Search beers" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Searchbar;
