import { useEffect, useState } from "react";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/search?q=";

function Search({ setBeers }) {
  const [searchString, setSearchString] = useState();

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchString(searchValue);
  };

  useEffect(() => {
    axios.get(`${apiURL}${searchString}`)
      .then(response => setBeers(response.data))
      .catch(error => console.log(error));
  }, [setBeers, searchString])

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
          className="form-control search-bar" onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
