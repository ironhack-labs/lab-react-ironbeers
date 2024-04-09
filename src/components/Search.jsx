import { useEffect, useState } from "react";
const API_URL = `https://ih-beers-api2.herokuapp.com`;

function Search({ setBeers }) {
  const [query, setQuery] = useState("");

  const fetchBeers = async () => {
    try {
      const response = await fetch(`${API_URL}/beers/search?q=${query}`);
      if (response.ok) {
        const responseData = await response.json();
        setBeers(responseData);
      } else {
        throw new Error("Error while searching for beers");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, [query]);

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
