import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setData(response.data))
      .then((res) => {
        console.log(data);
      });
  }, [data]);

  return (
    <div>
      {data.map((beer) => (
        <div>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt="beerImage" />
            <div>
              <h5>{beer.name}</h5>
              <h5>{beer.tagline}</h5>
              <p>Created By: {beer.contributed_by}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllBeers;
