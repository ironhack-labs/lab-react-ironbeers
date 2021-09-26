import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SingleBeer() {
  const [beer, setBeer] = useState([]);

  const { beerId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <img src={beer.image_url} alt="" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  );
}
export default SingleBeer;
