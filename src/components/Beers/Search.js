import React from 'react';

const Search = ({onChange}) => (
  <div className="search">
    <input type="text" name="q" placeholder="Search..." onChange={ e => onChange(e) } />
  </div>
);

export default Search;