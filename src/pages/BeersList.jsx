import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerSearch from "../components/BeerSearch";

function BeersList() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchBeer = async (query) => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="contact">
          <BeerSearch searchBeer={searchBeer} />
        </div>
      </div>
      {beers.map((beer) => {
        return (
          <div>
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <div>
                  <img className="img2" src={beer.image_url} alt="" />
                </div>
                <div>
                  <h3>{beer.name}</h3>
                  <h3>{beer.tagline}</h3>
                  <h3>{beer.contributed_by}</h3>
                </div>
                <hr />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
