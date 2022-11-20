import React from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import { useState, useEffect } from 'react'


function RandomBeers() {
    const [randomBeer, setRandomBeer] = useState([]);

    const getRandomBeer = async () => {

        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            setRandomBeer(response.data);

        } catch (error) {
            console.log(error)
        };
    }

        useEffect(() => {
            getRandomBeer();
          }, []);

  return (
    <div>
    <NavBar/>
            <img src={randomBeer.image_url} alt="beer"></img>
            <h1>{randomBeer.name}</h1>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeers 