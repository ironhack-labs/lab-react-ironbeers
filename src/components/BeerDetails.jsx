import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Header from './Header';

function BeerDetails() {
    const [beer, setBeer] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                setBeer(response.data)
            })
    }, [id])


    return (
        <div>
            <Header/>
            <img src={beer.image_url} alt="singlebeer" />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails