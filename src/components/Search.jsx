import { useState } from "react";

function Search({ handleSearch }) {
  const [string, setString] = useState("");

  const handleChange = (e) => {
    handleSearch(e.target.value);
    setString(e.target.value);
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
          type="text"
          className="form-control search-bar"
          value={string}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
