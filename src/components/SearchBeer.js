import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

function SearchBeer({ setBeers }) {
  const [searchValue, setSearchValue] = useState("");
  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
    async function fetchBeers() {
      const response = await fetch(BASE_URL + "beers/search?q=" + searchValue);
      const data = await response.json();
      setBeers(data);
    }
    fetchBeers();
  }, [searchValue, setBeers]);

  return (
    <div>
      <label>
        Search for a Beer:
        <input value={searchValue} onChange={handleChange} />
      </label>
    </div>
  );
}

export default SearchBeer;
