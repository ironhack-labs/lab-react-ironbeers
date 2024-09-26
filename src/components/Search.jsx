import { useState } from "react";
import axios from "axios";

import API_URL from "../utils/api";

function Search(props) {


  const [searchQuery, setSearchQuery] = useState()

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value)

    try {

      const response = await axios.get(`${API_URL}/search?q=${e.target.value}`)

      console.log(response.data)

      props.setBeers(response.data)
      


    } catch (error) {
      console.log(error)
    }
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
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
