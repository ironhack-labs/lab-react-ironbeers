import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const BeerDetails = (props) => {

  const [beers,SetBeer]= useState([])

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response);
        SetBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, []);


  const { id }= useParams();

  // const myBeer = props.find(
  //   (beer) => beer._id === params._id
  
  return (
    <div>
<img src={beers.image_url} alt='Beer'/>
  <p>{beers.name}</p>
  <p>{beers.tagline}</p>
  <p>{beers.first_brewed}</p>
  <p>{beers.attenuation_level}</p>
  <p>{beers.description}</p>
  <p>{beers.contributed_by}</p>
    </div>
  )
};

export default BeerDetails;
