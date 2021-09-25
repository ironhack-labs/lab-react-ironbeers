import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// 
export default function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState([]);
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
          // console.log(response.data)
          setRandomBeer(response.data)
        })
        .catch(err => console.log(err))
      }, []);
    return (
        <div>
            < Header />
            <div>
                <img src={randomBeer.image_url} alt={randomBeer.name} width="60" class="random-beer-img"/>
                <div class="random-beer-section">
                    <h2>{randomBeer.name}</h2> 
                    <h2 class="attenuation-level">{randomBeer.attenuation_level}</h2>
                </div>
                <div class="random-beer-section">
                    <h4>{randomBeer.tagline}</h4>
                    <p><b>{randomBeer.first_brewed}</b></p>
                </div>
                <div class="random-beer-description">
                    <p>{randomBeer.description}</p>
                    <p class="contributed-by">{randomBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}