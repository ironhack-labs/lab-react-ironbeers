import { useEffect, useState } from 'react';

function Search({handleSearchInputChange}) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    handleSearchInputChange(newValue);
  };
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
        value={inputValue}
          type="text"
          className="form-control search-bar"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
