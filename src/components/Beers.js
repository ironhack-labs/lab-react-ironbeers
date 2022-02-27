import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setBeers(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {beers &&
        beers.map((beer) => {
          return (
            <div className="BeerBox" key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div>
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>
                  Contributed by: <br />
                  {beer.contributed_by}
                </p>
              </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
