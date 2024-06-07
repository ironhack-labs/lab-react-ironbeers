import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response.data); // Para ayudarte a visualizar la estructura de los datos
        setBeers(response.data);
      })
      .catch(error => {
        console.error("Error fetching the beers: ", error);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <div>
        {beers.map(beer => (
          <div key={beer._id} className="beer-item">
            <img src={beer.image_url} alt={beer.name} style={{ width: "50px" }} />
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;