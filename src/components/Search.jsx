import { useState } from "react";

function Search({searchHandler}) {

const [query, setQuery] = useState("");


const handleSearch = (e) => {
  setQuery(e.target.value)
  searchHandler(query)
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
          onChange={handleSearch}

        />
      </div>
    </div>
  );
}

export default Search;
