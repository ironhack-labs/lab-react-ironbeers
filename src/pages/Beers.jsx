import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleBeer from "./SingleBeer";

export default function Beers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        return setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="beers">
      {beers.map((beer) => {
        return (
          <Link
            to={`/beers/${beer._id}`}
            key={beer._id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="beer">
              <img src={beer.image_url} alt="" height={70} />
              <div>
                <div className="name">{beer.name}</div>
                <div className="tagline">{beer.tagline}</div>
                <div className="contributed_by">{beer.contributed_by}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
