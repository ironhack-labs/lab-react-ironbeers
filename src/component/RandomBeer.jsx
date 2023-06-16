import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function RandomBeer() {
    const [oneRandomBeer, setOneRandomBeer] = useState([]);
    useEffect(() => {
      fetchRandomBeer();
    }, []);
    const fetchRandomBeer = async () => {
      const { data } = await axios("https://ih-beers-api2.herokuapp.com/beers/random");
      setOneRandomBeer(data);
    };
  return (
    
    <div>
    {oneRandomBeer.map((oneBeer) => {
      return (
        <div className="">
          <img src={oneBeer.image} alt="beer bottle" />
          <div className="side-text" style={{ height: "200px"}}>
            <h1>{oneBeer.name}</h1>
            <h2>{oneBeer.tagline}</h2>
            <h3>{oneBeer.first_brewed}</h3>
            <h3>{oneBeer.attenuation_level}</h3>
            <h3>{oneBeer.description}</h3>
            <h3>{oneBeer.contributed_by}</h3>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default RandomBeer