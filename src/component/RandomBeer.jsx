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
          <img src={oneBeer.image_url} alt="beer bottle" />
          <div className="side-text" style={{ height: "200px"}}>
            <h2>{oneBeer.name}</h2>
            <h3>{oneBeer.tagline}</h3>
            <h5>Created by: {oneBeer.contributed_by}</h5>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default RandomBeer