import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import HomeHead from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log(response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={HomeHead} />
        </Link>
      </header>

      {beers.map((beer) => (
        <div className="container" key={beer._id}>
          <div className="beersImg">
            <img src={beer.image_url}></img>
          </div>
          <div className="beersInfo">
            <Link to={`/Beers/${beer._id}`}><h2>{beer.name}</h2></Link> 
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Beers;
