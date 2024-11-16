import axios from "axios";
import { useEffect, useState } from "react";

function Search({ setBeers }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchText}`)
      .then(({ data }) => setBeers(data))
      .catch((err) => console.log(err));
  }, [searchText]);

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
          value={searchText}
          onChange={handleSearchInput}
        />
      </div>
    </div>
  );
}

export default Search;
