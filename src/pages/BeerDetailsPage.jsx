import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = "https://ih-beers-api2.herokuapp.com";

function BeerDetailsPage() {
//    console.log(useParams())

const {beerId} = useParams()
  const [beer, setBeer] = useState({})
  const getOneBeers = () => {
    axios
      .get(`${API_URL}/beers/${beerId}`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getOneBeers()
  }, [beerId])
  console.log(beer)
  return (
    <div>
      
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h3>{beer.first_brewed} </h3>
            <h2>{beer.attenuation_level}</h2>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>

          

    </div>
  )
}

export default BeerDetailsPage;
