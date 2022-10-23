import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("error getting beers from the API", error);
      });
  }, []);

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      {beers.map((beer, index) => {
        return (
          <div key={index}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            <p>
              <Link to={`/beers/${beer._id}`}>More details</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
