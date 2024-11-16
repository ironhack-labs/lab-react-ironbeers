import axios from "axios";
import { useEffect, useState } from "react";

function Search({ setBeers }) {
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    const searchBeers = () => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchStr}`)
        .then((response) => setBeers(response.data))
        .catch((error) => console.log(error));
    };

    if (searchStr) {
      searchBeers();
    }
  }, [searchStr]);

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
          value={searchStr}
          onChange={(e) => {
            setSearchStr(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
