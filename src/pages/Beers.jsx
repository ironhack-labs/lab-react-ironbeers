import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from 'react-router-dom';

function Beers() {
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
  console.log(beers);

  return (
    <div>
      <Navbar />

      {beers.map((beer) => {
        return (
          <div>
            <div>
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div>
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p><b>Created by:</b> {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>See Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
