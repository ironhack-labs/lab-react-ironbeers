import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "../contexts/api.context";
import Header from "./Header";

function RandomBeer() {
  const [beers, setBeers] = useState([]);
  const { apiUrl } = useContext(ApiContext);

  const getBeers = async () => {
    try {
      let response = await axios.get(`${apiUrl}/random`);
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
      <Header />
      <section>
        {beers && (
          <>
            <img src={beers.image_url} alt={beers.name} className="beerImage" />
            <h2>{beers.name}</h2>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default RandomBeer;