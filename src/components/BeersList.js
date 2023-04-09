
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("error loading beers", error);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer, index) => {
          return (
            <li key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BeersList;
