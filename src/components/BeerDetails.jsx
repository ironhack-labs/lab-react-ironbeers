import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom';

export default function BeerDetails(props) {
    const [beer, setBeer] = useState({})
    const { id } = useParams()

    const getBeer = async (beerId) => {
        const beer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        setBeer(beer.data)
    }

    useEffect(() => {
        getBeer(id)
    })
    
    return (
        
         <div className="beer-details">
            <img src={beer.image_url} alt="" />
            <div className='info-row'>
            <h1>{beer.name}</h1>
            <h1>{beer.attenuation_level}</h1>
            </div>
            <div className='info-row'>
            <h3> {beer.tagline} </h3>
            <p><strong>{beer.first_brewed}</strong></p>
            </div>
            <p>{beer.description}</p>
            <h3>{beer.contributed_by}</h3>
        </div>
        
    )
}
