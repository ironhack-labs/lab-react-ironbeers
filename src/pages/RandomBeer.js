import React from 'react';
import { beers } from './ListBeers';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import Header from '../components/Header';


export default function RandomBeer() {

    const params = useParams()

    const id = params.id


    const [beer, setBeer] = useState([]);

    //因為 <Link to={`/onebeer/${beer._id}`}>{beer.name}</Link>
    // <h1> <Link to={`/random/${beer._id}`}>Random Beer</Link></h1>

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                console.log(response.data.name)

                setBeer(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header />
            <div class="one-beer-img">
                <img height='400px' src={beer.image_url} alt="beerImg" className="beer-img" />
            </div>
            <div>
                <span>{beer.name}</span>
                <span>{beer.attenuation_level}</span>
            </div>


            <div>
                <span>{beer.tagline}</span>
                <span>{beer.first_brewed}</span>
            </div>

            <div>
                <span>{beer.description}</span>
            </div>


            <div>
                <span>{beer.contributed_by}</span>
            </div>

            <div>
                <span>{beer.food_pairing}</span>
            </div>

        </div>
    )
}
