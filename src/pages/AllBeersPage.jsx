import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const url = searchQuery
          ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
          : "https://ih-beers-api2.herokuapp.com/beers";
        const response = await axios.get(url);
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    fetchBeers();
  }, [searchQuery]);

  return (
    <div>
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search beers by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {beers.map((beer) => (
        <div key={beer._id}>
          <img
            src={beer.image_url}
            alt={beer.name}
            style={{ width: "100px" }}
          />
          <h2>{beer.name}</h2>
          <Link to={`/beers/${beer._id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
