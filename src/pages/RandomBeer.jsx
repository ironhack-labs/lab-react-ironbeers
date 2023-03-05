import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from "react"
import headerImg from "../assets/header.png"
import axios from 'axios'

function RandomBeer() {
  const [beer,setBeer] =useState();
  
  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);
  console.log(beer);

  return (
    <div>
       <header>
       <Link to={"/"}><img src={headerImg}></img></Link>
            </header>
            <h1>Random Beer</h1>

            <p>Name:{beer.name}</p>
          <img className="images" src={beer.image_url} alt="BeerImage" />
          <p>Tagline: {beer.tagline}</p>
          <p>First Brewed:{beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>

          <Link to={`/${beer._id}`}>
            <p>Go to Details</p>
          </Link>

        </div>
  )
}

export default RandomBeer