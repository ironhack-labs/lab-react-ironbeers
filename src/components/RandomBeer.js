import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const randomBeerAPI = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeer() {
    const [fetching, setFetching] = useState(true);
    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        console.log("useEffect - Random Beer");
        axios.get(randomBeerAPI)
          .then((response) => {
            console.log(response.data);
            setRandomBeer(response.data);
            setFetching(false);
          });
      }, []);

    return (
        <div>
        <h1>Random Beer</h1>
            <div className="img-details"><img src={randomBeer.image_url} alt={randomBeer.name} /></div>
            <div className="row">
                <div className="col-sm-8">
                    <h1>{randomBeer.name}</h1>
                    <p>{randomBeer.tagline}</p>
                </div>
                <div className="col-sm-4">
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                </div>
            </div>
            <p>{randomBeer.description}</p>
            <p className="text-secondary">{randomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeer;