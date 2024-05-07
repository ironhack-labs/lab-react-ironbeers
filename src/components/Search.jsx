import { useState } from "react";

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/search?q={query}'

function Search({ filterBeersByName }) {

  const [nameQuery, setNameQuery] = useState()

  const handleQuery = e => {
    const { value } = e.target
    setNameQuery(value)
    filterBeersByName(value)
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
          value={nameQuery}
          onChange={handleQuery}
        />
      </div>
    </div>
  );
}

export default Search;
