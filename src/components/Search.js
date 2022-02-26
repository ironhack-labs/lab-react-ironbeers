import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Search(props) {

  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useSearchParams ()
 
  const handleInputChange = (event) => {
      event.preventDefault();
      setSearchInput (event.target.value);
      props.filterBeers(event.target.value);
      setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="search for a beer"
          value={searchInput}
          onChange={handleInputChange}
        />
      </form>

    </div>
  );
}
