import { useState } from "react";


function Search({setQuery}) {

  const [queryString, setQueryString] = useState("")

  const handleSearchChange = (e) => {
    setQueryString(e.target.value)
    setQuery(e.target.value)
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
          value={queryString}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default Search;
