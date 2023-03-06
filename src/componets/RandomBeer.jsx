import React from 'react'
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function RandomBeer() {
    const [beerRandom, setBeerRandom] = useState(null);

  
    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => {
          setBeerRandom(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
      <>
        {beerRandom && (
          <div className="beer-random">
            <img src={beerRandom.image_url} alt="beerRandom" />
            <h2>{beerRandom.name}</h2>
            <h3> {beerRandom.tagline}</h3>
            <p>{beerRandom.description}</p>
            <h4>{beerRandom.first_brewed}</h4>
            <h5>{beerRandom.attenuation_level}</h5>
            <h7>Created by:{beerRandom.contributed_by}</h7>
          </div>
        )}
      </>
    );
}

export default RandomBeer