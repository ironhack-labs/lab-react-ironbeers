import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
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
    getBeers();
  }, []);

  return (
    <div>
      <h3>All Beers</h3>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beer" />
          <Link to={`/BeerDetail/${beer._id}`}>
            <h3>{beer.name}</h3>
          </Link>
          <p> {beer.tagline}</p>
          <h4>Created by:{beer.contributed_by}</h4>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;


  