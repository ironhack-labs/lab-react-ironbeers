import Navbar from "./Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  console.log(beers);

  return (
    <div className="card">
      <Navbar />
      <h1>All Beers</h1>

      {beers.length &&
        beers.map((beer) => {
          return (
            <>
              <img className="images" src={beer.image_url} alt="BeerImage" />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>

              <Link to={`/${beer._id}`}>
                <p>Go to Details</p>
              </Link>
            </>
          );
        })}
    </div>
  );
}

export default Beers;
