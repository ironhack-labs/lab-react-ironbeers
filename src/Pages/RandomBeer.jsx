import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RandomBeer = (props) => {
  const [randomBeers,SetrandomBeers]= useState([])
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log(response);
        SetrandomBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);


  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h1>HAHA</h1>
      <Link to="/"><i class="fas fa-home"></i>Home</Link>
      <img  style={{width:"80px"}} src={randomBeers.image_url} alt='Beer'/>
  <p>{randomBeers.name}</p>
  <p>{randomBeers.tagline}</p>
  <p>{randomBeers.first_brewed}</p>
  <p>{randomBeers.attenuation_level}</p>
  <p>{randomBeers.description}</p>
  <p>{randomBeers.contributed_by}</p>   
    </div>
  );
};

export default RandomBeer;
