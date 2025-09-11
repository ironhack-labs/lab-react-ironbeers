import axios from "axios";
import { useEffect, useState } from "react";

function Search({ setBeers }) {
  const [searchValue, setSearchValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleOnChange = async (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(`Typed value : ${value}:`);
    try {
      setIsFetching(true);
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`);
      console.log(`Data all beers that contain: ${value}:`, response);
      setBeers(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input type="text" className="form-control search-bar" placeholder={isFetching ? "Loading..." : "Search a beer"} onChange={handleOnChange} value={searchValue} />
      </div>
    </div>
  );
}

export default Search;
