import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/search?q=" + search
        );
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    if (search) {
      fetchData();
    } else {
      setBeers([]);
    }
  }, [search]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
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
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
