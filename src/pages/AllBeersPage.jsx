import React, { useEffect, useState } from "react";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url = query
      ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      : "https://ih-beers-api2.herokuapp.com/beers";

    axios
      .get(url)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beers:", error);
      });
  }, [query]);

  return (
    <div>
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search beers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} style={{ height: "100px" }} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;