import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <h2 style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>All beers</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ height: '100px', margin: '20px' }}/>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            <p style={{ fontFamily: 'Arial, sans-serif' }}>{beer.tagline}</p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Contribuido por: {beer.contributed_by}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllBeersPage;