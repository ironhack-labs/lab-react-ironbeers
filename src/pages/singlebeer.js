import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react"
import Home from '../components/Navbar'

function SingleBeer() {
  const id = useParams().id
  const [beer, setBeer] = useState([]);
console.log(id)
  useEffect(() => {                                        // <== ADD THE EFFECT
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data)
        setBeer(response.data)
      });
    
  }, [] );       // <--  [] means: Run the effect only once, after initial render
return (
    <div>
    <Home />
      <h3>Beer</h3>
          <img src={beer.image_url} style= {{width: 50 }} alt=" " />
          <h3>{beer.name}</h3>
          <h5>{beer.tagline}</h5>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
    </div>
      )}
      
   
  export default SingleBeer