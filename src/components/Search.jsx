import { useState } from "react";
import axios from "axios";

function Search(props) {
  const [srchItem, setSrchItem] = useState("");

  const handleSearch = async (e) => {
    setSrchItem(e.target.value);
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${srchItem}`
      );
      console.log(response.data);
      props.setBeers(response.data);
    } catch (e) {
      console.log(e);
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

        <input
          type="text"
          className="form-control search-bar"
          value={srchItem}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
