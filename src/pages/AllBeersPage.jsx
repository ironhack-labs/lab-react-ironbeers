import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then((result) => {
        console.log(result.data);
        setBeers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {beers &&
        beers.map((beer) => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <img width="50px" src={beer.image_url} alt="" />
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <p>Created by: {beer.contributed_by}</p>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
