import axios from "axios";
import React, { useState } from "react";

function Searchbeer(props) {
  const { searchBeers } = props;
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBeers(query);
    setQuery("");
  };

  return (
    <section className="search-beers">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-beer"
          id="search-beer"
          placeholder="Beer"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Searchbeer;
