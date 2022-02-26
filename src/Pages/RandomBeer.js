import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


function RandomBeer() {
    
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() =>{
        const getRandomBeer = async () =>{
            const result = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers/random"
            );
            setRandomBeer(result.data);
        };
        getRandomBeer();

    }, []);

    if (!randomBeer) {
        return <p className="col-7"> Loading... </p>;
      }

    console.log('ONEBEER', randomBeer)
   
    return (
      <div className="BeerDetails"> 
        <img src={randomBeer.image_url} className="BeersList" style={{ maxHeight: '20vh'}} />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    );
}

  export default RandomBeer;
  