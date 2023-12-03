import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllBeersPage = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        let url = "https://ih-beers-api2.herokuapp.com/beers";

        // Add search query to the URL if available
        if (searchQuery) {
          url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch beers");
        }
        const data = await response.json();
        setAllBeers(data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>All Beers</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <ul>
        {allBeers.map((beer) => (
          <li key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Beer contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;
