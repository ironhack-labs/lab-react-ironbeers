import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_URL = "https://ih-beers-api2.herokuapp.com";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/beers`)
      .then((response) => setBeers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="main-div">
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="container-beers">
            <div className="img-container">
                <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
            </div>
            <div className="description-container">
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>View Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
