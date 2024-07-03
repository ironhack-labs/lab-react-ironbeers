import { useState, useEffect } from "react";

function Search({ displaySearchResults }) {

  const [query, setQuery] = useState("");

  // listen for change in search bar
  const handleInput = (event) => {
    setQuery(event.target.value);
  }

  // fetch data based on search query
  useEffect(() => {
    const fetchSearchData = async() => {
      // if search bar is empty, display regular list of beers (in page)
      if (query.trim() === "") {
        displaySearchResults(query);
        return;
      }

      try {
        // fetch data based on search query
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);

        if (!response.ok) {
          throw new Error(response);
        }

        // display data on page
        const data = await response.json();
        displaySearchResults(query, data);

      } catch (error) {
        console.log("An error occured: ", error);
      }
    }

    fetchSearchData();
  }, [query])

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
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default Search;
