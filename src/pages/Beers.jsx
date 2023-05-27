import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beersData, setBeersData] = useState([]);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeersData(response.data);
    });
  }, []);

  return (
    <div>
      {beersData.map((beer) => (
        <Link to={`/beers/${beer._id}`}>
          <img src={beer.image_url} alt="beer" />
          <h1>{beer.name}</h1>
          <h2>{beer.tagline}</h2>
          <p>{beer.contributed_by}</p>
        </Link>
      ))}
    </div>
  );
};

export default Beers;