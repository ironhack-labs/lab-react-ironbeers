import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import NewBeer from "./NewBeer";

export default function Beers() {
  
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

  const getFilteredBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q={query}`
      );
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
      
      <NewBeer refreshBeers={getAllBeers} />
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="each-beer" />
            </Link>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}
