import { useState, useEffect } from "react";
import axios from "axios";
function Search() {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [search]);
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
          placeholder="Search for a beer"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
export default Search;
