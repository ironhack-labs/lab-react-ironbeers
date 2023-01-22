import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

const BeerDetails = () => {
    const [beer, setBeer] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                setBeer(response.data)
            })
    }, [id])


    return (
        <div className='beerDetails'>
            <img src={beer.image_url} alt={beer.name} className="beerDetailsImg" />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails