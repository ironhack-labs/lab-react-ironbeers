import { useState } from "react";
const beersURL = 'https://ih-beers-api2.herokuapp.com/beers'

function Search({ searchByQuery }) {

  const [query, setQuery] = useState('')

  const handleSearchQuery = (e) => {
    const { value } = e.target
    setQuery(value)
    searchByQuery(value)
  }

  return (

    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          value={query}
          onChange={handleSearchQuery}
        />
      </div>
    </div>
  );
}

export default Search;
