import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
 
function BeerDetailsPage() {
  const { beerId } = useParams();

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data)
      })
      .catch(() => console.log('error'))
  }, [])  

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <p>Name: {beer.name}</p>
      <p>Tagline: {beer.tagline}</p>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  )
}

export default BeerDetailsPage;
