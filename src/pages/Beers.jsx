import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BeerDetails from "./BeerDetails";
import { Link } from "react-router-dom";

function Beers() {
  const [beer, setBeer] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeer(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div className="Beers">
      <Navbar />
      {beer.map((beers) => {
        return (
          <div>
            <img src={beers.image_url} alt="" />
            <Link to={`/${beers._id}`}>
              <h2>{beers.name}</h2>
            </Link>
            <p>{beers.tagline}</p>
            <p>
              <b>Created by:</b>
              {beers.contributed_by}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
