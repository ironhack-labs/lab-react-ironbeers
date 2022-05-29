import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BeerDetails() {
  const [beers, setBeers] = useState([]);
  const { beersId } = useParams();

  const getBeers = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beersId}`
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
      <Navbar />
      {beers && (
        <>
          <img src={beers.image_url} alt="" />
          <h3>{beers.name}</h3>
          <h3>{beers.tagline}</h3>
          <h3>{beers.first_brewed}</h3>
          <h3>{beers.attenuation_level}</h3>
          <h3>{beers.description}</h3>

          <h3>{beers.contributed_by}</h3>
        </>
      )}

      <Link to="/beers">
        <button>Back to Beer List</button>
      </Link>
    </div>
  );
}

export default BeerDetails;
