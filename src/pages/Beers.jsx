import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);

  const getAllbeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllbeers();
  }, []);

  return (
    <div className="">
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="">
            <img src={beer.image_url} alt="" />
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>
            <p>{beer.tagline}</p>
            <p>contributed by: {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
