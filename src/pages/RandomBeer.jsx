import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";

function RandomBeer() {
  const [oneRandomBeer, setOneRandomBeer] = useState({});

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  const fetchRandomBeer = async () => {
    try {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      setOneRandomBeer(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <Header/>
      <div className="">
        <img src={oneRandomBeer.image_url} alt="beer bottle" />
        <div className="side-text" style={{ height: '200px' }}>
          <h2>{oneRandomBeer.name}</h2>
          <h3>{oneRandomBeer.tagline}</h3>
          <h5>Created by: {oneRandomBeer.contributed_by}</h5>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
