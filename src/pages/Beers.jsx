import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../utils/constants.js";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("response data:", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      {beers.map((beer) => {
        return (
          <div className="beer-card" key={beer._id}>
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <h2>{beer.name}</h2>
            <p className="beer-tagline">{beer.tagline}</p>
            <p className="beer-contributor">
              Contributed by: {beer.contributed_by}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
