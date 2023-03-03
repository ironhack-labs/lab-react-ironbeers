import React from 'react'
import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from "axios";
import Header from './Header';


function BeerDetails() {

    const [beer, setBeer] = useState([]);
    const { beerId } = useParams();
    
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    
    useEffect(() => {
        axios
          .get(apiURL)
          .then((response) => {
              setBeer(response.data);
              console.log(response.data)
          })
          .catch((err) => console.log(err));
      }, [beerId]);


  return (
    <div>
        <Header/>
        <img src={beer.image_url} alt="beer" />
        <h3>{beer.tagline} </h3>
        <h3>{beer.first_brewed}</h3>
        <h3>{beer.attenuation_level}</h3>
        <h3>{beer.description}</h3>
        <h3>{beer.contributed_by}</h3>
    
    </div>
  )
}

export default BeerDetails