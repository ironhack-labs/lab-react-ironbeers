import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function Search() {

  const [search, setSearch] = useState();

  const searchQuery = () => {
    axios
    .get(`${API_URL}/beers/search?q={query}`)
    .then((response) => setSearch(response.data))
    .catch((error) => console.log(error))

  }

  useEffect(() => {
    searchQuery();
  }, [search])
    
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
        />
      </div>
    </div>
  );
}

export default Search;
