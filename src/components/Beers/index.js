import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Beers() {
  const [beers, setBeers] = React.useState([]);
  console.log(beers);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="beers">
      {beers.map((beer) => (
        <div className="beer-card" key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}