//AllBeersPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="all-beers">
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <Link to={`/beers/${beer._id}`}>
              <div className="beer-image">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="beer-details">
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
