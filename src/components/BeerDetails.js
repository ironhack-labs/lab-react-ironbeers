import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


export default function BeerDetails(props) {

    const API_URL = 'https://ih-beers-api2.herokuapp.com/beers'
    const [beer, setBeer] = useState([])
    const beerId = props.match.params.id

    const getBeer = () => {
        axios.get(`${API_URL}/${beerId}`)
            .then(res => {
                console.log(res.data)
                setBeer(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBeer();
    }, [])


    return (
        <div class="hero-unit" className='beerDetailsContainer'>
            <img src={beer.image_url} alt='beer' className='beerDetailsImg' />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline} First Brewed on {beer.first_brewed}</h3>
            <p>{beer.description}</p>
            <br />
            <p>Contributed By: {beer.contributed_by}</p>

            <p>
                <a className="btn btn-primary btn-large">
                    Buy Now
                </a>
            </p>
        </div>
    )
}
