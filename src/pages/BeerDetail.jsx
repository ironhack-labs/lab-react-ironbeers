import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'

import { getBeer } from "../services/beers"

const BeerDetail = ({ match: { params: { beerId } } }) => {

    console.log(beerId)

    const [beer, setBeer] = useState(null)

    async function fetchBeer() {
        const beer = await getBeer(beerId)
        setBeer(beer)
        console.log(beer)
    }

    useEffect(() => {
        fetchBeer()
    }, [])

    return (
        beer ? ( 
        <div>
            <Header />
            <img src={beer.image_url}/>
	        <p> { beer.name } </p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>

    ) : ( 
	<p> Loading... </p>
    ))
}


export default BeerDetail


// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by