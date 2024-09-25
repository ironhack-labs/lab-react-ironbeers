import { useEffect, useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [beers, setBeers] = useState("");
  useEffect(() => {
    if (searchQuery !== "") {
      fetch(`${import.meta.env.VITE_SERVER_URL}/search?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setBeers(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchQuery]);

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          value={searchQuery}
          className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;
