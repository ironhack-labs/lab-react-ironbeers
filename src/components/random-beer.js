import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import '../App.css';


const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(beerRandom => setRandomBeer(beerRandom.data),
    console.log(randomBeer))
    .catch(error => console.log(`${error}`))
}, [])

  return (
       <div>
            <Header /> 
            <div>
                <div className="card-details">
                    <figure >
                        <img className="card-image-details" src={randomBeer.image_url}/>
                    </figure>
                    <div className="card-content">
                        <h2 className="title is-3">{randomBeer.name}</h2>
                        <p className="title is-4"><i>{randomBeer.tagline}</i> {randomBeer.attenuation_level}</p>
                        <p>{randomBeer.description}</p>
                        <p className="title is-6">{randomBeer.first_brewed}</p>
                    </div>
                </div>
            </div>
        </div>
  )
};

export default RandomBeer;