import { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { ThemeContext } from "../contexts/theme";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


import React from "react";

function Beers() {
  const [beers, setBeers] = useState([]);
  const { beerId } = useParams();
  const getBeers = async () => {
    try {
      const apiCall = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeers(apiCall.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, [beerId]);
  return (
    <div>
      <Link to="/">
        <img
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt="header"
        />
      </Link>
      <h1>List of beers</h1>
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} alt="beerimg" />
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <p>{beer.contributed_by}</p>
         
        </div>

      ))}
    </div>
  );
}

export default Beers;
