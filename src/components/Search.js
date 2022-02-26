import { useState } from "react";

export default function Search(props) {
    
  const [searchInput, setSearchInput] = useState("");
 
  const handleInputChange = (event) => {
      setSearchInput (event.target.value);
      props.filterBeers(event.target.value)
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
