import axios from "axios";
import { useState } from "react";

//const API_URL = "https://ih-beers-api2.herokuapp.com/beers/search?q=";

function Search({ setBeers }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
    .then((resp) => {
      setBeers(resp.data);
    })
    .catch((error) => {
      console.log("There's been an error searching for beers:", error);
    });

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
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
