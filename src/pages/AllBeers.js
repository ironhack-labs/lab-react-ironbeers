import { useState, useEffect } from "react";
import axios from "axios";
import React  from 'react'
import { useParams, Link } from 'react-router-dom'

function AllBeer() {
  const [beers, setBeers] = useState([]);

  // This effect will run only once after the initial render 
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, []);       // <--  [] means: Run the effect only once, after initial render


  return (
    <div>
      <h3>List of Beers</h3>
      {beers.map((beer) => (
        <div key={beer.id} className="card">
<Link className="list-group-item" to={`/beers/${beer.id}`}>
<h3>{beer.name}</h3>
</Link>
          <img src={beer.image_url} alt="beer" />
          <p>{beer.tagline}</p>
        </div>
      ))}
    </div>
  );
}

export default AllBeer;
