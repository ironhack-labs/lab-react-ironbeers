import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const { id } = useParams();

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
  
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} height="200" alt="beer" />
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name} </h3>
            </Link>
            <h4>{beer.tagline}</h4>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
