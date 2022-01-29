import { useState } from 'react';

const Search = (props) => {
  const [searchState, setSearchState] = useState('');

  const searchChangedHandler = ({ target }) => {
    setSearchState(target.value);
    props.onSearchChange(target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchState}
        onChange={searchChangedHandler}
      />
    </div>
  );
};

export default Search;
