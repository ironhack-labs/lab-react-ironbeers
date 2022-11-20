import { useState } from 'react';

import React from 'react'

function Search({filterBeers}) {
    const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterBeers(e.target.value);
  };

  return (
    <div>
      <h3>Search</h3>

      <input type="text" value={query} onChange={handleQuery} />
    </div>
  )
}

export default Search